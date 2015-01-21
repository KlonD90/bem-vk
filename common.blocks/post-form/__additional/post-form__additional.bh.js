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
                elem: 'add-video',
                content: [{
                    block: 'button',
                    mods: {theme: 'islands', size: 'm', view: 'action'},
                    text: 'Add video',
                    js: {func: 'video'}
                }]
            },
            {
                elem: 'add-images',
                content: [{
                    block: 'button',
                    mods: {theme: 'islands', size: 'm', view: 'action'},
                    text: 'Add images',
                    js: {func: 'images'}
                }]
            }
        ], true);
    });

};
