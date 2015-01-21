module.exports = function(bh) {
    bh.match('post-form__additional', function(ctx, json) {
        ctx.tag('ul');
        ctx.content([
            {
                block : 'spin',
                mods : { theme : 'islands', size : 'm' }
            },
            {
                block: 'error'
            },
            {
                block: 'insert',
                type: 'video'
            },
            {
                block: 'insert',
                type: 'image'
            }
        ], true);
    });

};
