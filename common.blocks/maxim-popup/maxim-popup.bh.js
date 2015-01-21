module.exports = function(bh) {
    bh.match('popup', function(ctx, json) {
        ctx.content([
            {
                elem: 'wrap',
                content: [
                    {
                        elem: 'container',
                        content: [
                            {
                                elem: 'center',
                                content: ctx.content()
                            }
                        ]
                    }
                ]
            }
        ], true);
    });
};
