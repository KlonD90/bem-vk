module.exports = function(bh) {
    bh.match('material-card', function(ctx, json) {
        var imageBlock = null;
        if (!json.img){
            imageBlock = {
                block: 'slider'
            };
        }
        else
            imageBlock = {
                elem: 'image',
                tag: 'img',
                attrs: {src: json.data.img}
            };
        ctx.content([
            {
                elem: 'wrap',
                tag: 'a',
                attrs: {href: json.data.link},
                content: [
                    imageBlock,
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
                    },
                ]
            },
            {
                elem:'close',
                content: [
                    {
                        block: 'button',
                        mods: {view: 'action', theme: 'islands', size: 's'},
                        text: 'X'
                    }
                ]
            }
        ], true);
    });
};
