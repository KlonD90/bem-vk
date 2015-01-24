[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        {block: 'video-card'},
        {block: 'button',mods : { theme : 'islands', size : 'm', view : 'action' }},
        {block: 'input',mods : { theme : 'islands', size : 'm'}},
        'spin'
    ]
},
    {
        tech : 'spec.js',
        mustDeps : [
            'button', 'input'
        ]
    },
    {
        shouldDeps:[
            {
                block : 'spin',
                mods : { theme : 'islands', size : 'm', visible : true }
            }
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
        }
    },
    {
        block: 'video-card',
        tech: 'js',
        shouldDeps: {
            tech: 'bh'
        }
    }
]
