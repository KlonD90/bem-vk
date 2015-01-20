var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded();

server.listen(4444);

app.get('/', function(req, res){

});

app.post('/addPost',urlEncodedParser, function(req, res){
    switch(req.body.action)
    {
        case 'urlInfo':
            request(req.body.url, function(err, res, body){
                if (err){
                    res.status(404).json({
                        code: 'error'
                    });
                }
                var $ = cheerio(body);
                var title = $('title').text();
                var img = null;
                if ($('link[rel="image_src"]').length)
                    img = $('link[rel="image_src"]').attr('href');
                else
                {
                    if($('meta[name="og:image"]').length)
                        img = $('meta[name="og:image"]').attr('content');
                }
                var description = $('meta[name="Description"],meta[name="description"]')
                    .attr('content');
                res.json({
                    code: 'ok',
                    title: title,
                    description: description,
                    img: img
                });
            });
            break;
        default:
            break;
    }
});
