var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded();
var Iconv = require('iconv').Iconv;
var charsetMap = {
    'windows-1251': 'cp1251'
};

server.listen(4444);

app.get('/addPost',urlEncodedParser, function(req, res){
    console.log(req.query);
    switch(req.query.action)
    {
        case 'urlInfo':
            var checkUrl = req.query.url;
            if(checkUrl.substr(0,4)!='http')
                checkUrl = 'http://'+req.query.url;
            request({url: checkUrl, encoding: null}, function(err, destinationResponse, body){
                if (err){
                    if (req.query.callback){
                        return res.status(404).json({
                            code: 'error'
                        });
                    }
                    else
                        return res.status(404).json({
                            code: 'error'
                        });
                }
                var $ = cheerio.load(body.toString());
                if ($('meta[charset]').length && $('meta[charset]').attr('charset') &&
                    $('meta[charset]').attr('charset')!='utf-8')
                {
                    var charset = $('meta[charset]').attr('charset');
                    if (charsetMap[charset])
                        charset = charsetMap[charset];
                    var translator = new Iconv(charset, 'utf-8');
                    console.log(charset);
                    console.log(destinationResponse);
                    $ = cheerio.load(translator.convert(body).toString());
                    //console.log(body);
                }
                var title = $('title').text();
                var img = null;
                if ($('link[rel="image_src"]').length)
                    img = $('link[rel="image_src"]').attr('href');
                else
                {
                    if($('meta[name="og:image"],meta[property="og:image"]').length)
                        img = $('meta[name="og:image"],meta[property="og:image"]').attr('content');
                }
                var description = $('meta[name="Description"],meta[name="description"]')
                    .attr('content');
                var answer = {
                    code: 'ok',
                    title: title,
                    description: description,
                    img: img,
                    link: checkUrl
                };
                if (req.query.callback)
                    res
                        .set({'Content-type':'application/javascript'})
                        .send(req.query.callback+'('+JSON.stringify(answer)+');');
                else
                    res.json(answer);
            });
            break;
        default:
            break;
    }
});
