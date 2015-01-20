module.exports = function(bh) {
    bh.match('post-form', function(ctx, json) {
        ctx.content([
            {
                elem: 'form'
            },
            {
                elem: 'additional'
            },
            {
                block : 'button',
                mods : { theme : 'islands', size : 'm', view : 'action' },
                text : 'Add post'
            }
        ], true);
    });
};
