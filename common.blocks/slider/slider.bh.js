module.exports = function(bh){
    bh.match('slider', function(ctx, json){
        ctx.content([
            {
                elem: 'wrap',
                content:[
                    {
                        elem: 'list',
                        tag: 'ul',
                        content: ctx.content()
                    }
                ]
            },
            {
                elem: 'right-arrow'
            },
            {
                elem: 'left-arrow'
            }
        ], true);
    });
};
