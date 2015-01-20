({
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    mods : { theme : 'islands' },
    content: [
        {
            block: 'content-wrapper',
            content: [
                {
                    block: 'post-form',
                    js: { controller: 'localhost:4444//addPost' }
                },
                {
                    block: 'feed',
                    content: [
                        {
                            block: 'post-info',
                            author: {
                                img: 'http://prodota.ru/templates/default/images/pd_logo.png',
                                name: 'Prodota.Ru'
                            },
                            post: {
                                text: 'New fun text'
                            },
                            content: [
                                {
                                    block: 'post-comments',
                                    content: [
                                        {
                                            block: 'comment',
                                            text: 'A',
                                            author: {
                                                name: 'KlonD90',
                                                link: 'http://dota.by',
                                                img: 'http://dota.by/img/dotabylogo.png'
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
