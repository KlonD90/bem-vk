module.exports = function(bh) {
    bh.match('post-video-form', function(ctx, json) {
        ctx.tag('form');
        ctx.content([
            {
                block: 'input',
                mods : { theme : 'islands', size : 'm', width: 'available'},
                placeholder: 'Вставьте ссылку на youtube ролик'
            },
            {
                block : 'spin',
                mods : { theme : 'islands', size : 'm' }
            }
        ], true);
    });
};
