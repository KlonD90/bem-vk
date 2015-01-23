[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [

        {block: 'button',mods : { theme : 'islands', size : 'm', view : 'action' }},
        {block: 'input',mods : { theme : 'islands', size : 'm'}}
    ]
},
    {
        tech : 'spec.js',
        mustDeps : [
            'button', 'input'
        ]
    },
    {
        block: 'button',
        tech: 'js',
        shouldDeps: {
            tech: 'bh'
        }
    },
    {
        block: 'post-video-form',
        tech: 'js',
        shouldDeps: {
            tech: 'bh'
        }]
    }
]
