module.exports = function(bh) {
    bh.match('video-card', function(ctx, json) {
        ctx.content([
            {
                elem: 'img',
                tag: 'img',
                attrs: {src: json.img}
            },
            {
                elem: 'title',
                tag: 'p',
                content: json.title
            }
        ], true);
    });
};
