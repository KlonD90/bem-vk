module.exports = function(bh) {
    bh.match('insert_type_link', function(ctx, json) {

        ctx.content([
            {
                elem: 'image'
            },
            {
                elem: 'info_link',
                content: [
                    {
                        elem: 'title'
                    },
                    {
                        elem: 'description'
                    }
                ]
            },
            {
                elem: 'close'
            }
        ], true);
    });
    bh.match('insert_type_tube', function(ctx, json) {
        ctx.content([
            {
                elem: 'tube'
            }
        ], true);
    });
};
