module.exports = function(bh) {
    bh.match('material-card', function(ctx, json) {
        ctx.content([
            {
                elem: 'wrap',
                tag: 'a',
                attrs: {href: json.data.link},
                content: [
                    {
                        elem: 'image',
                        tag: 'img',
                        attrs: {src: json.data.img}
                    },
                    {
                        elem: 'info',
                        content: [
                            {
                                elem: 'title',
                                content: json.data.title
                            },
                            {
                                elem: 'description',
                                content: json.data.description
                            }
                        ]
                    }
                ]
            }
        ], true);
    });
};
