[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        {elems: ['additional','form']},
        {block: 'button',mods : { theme : 'islands', size : 'm', view : 'action' }},
        'spin',
        'insert',
        'white-blank',
        {block: 'insert', mods:{type: 'link'}},
        {block: 'insert', mods:{type: 'tube'}},
        {block: 'insert', mods:{type: 'image'}},
        {block: 'material-card'},
        'maxim-popup',
        'i-maxim-popup',
        'post-video-form'
    ]
},
    {
        tech : 'spec.js',
        mustDeps : [
            { tech : 'bemhtml', block : 'button' },
            { tech : 'bh', block : 'button' },
            { block: 'button' },
            { tech : 'bh', block : 'spin'},
            { tech : 'bemhtml', block : 'spin'},
            {block: 'maxim-popup'},
            {block: 'post-video-form'}
        ]
    },
    {
        shouldDeps: [
            {block: 'button',mods : { theme : 'islands', size : 'm', view : 'action' }},
              {
                block : 'spin',
                mods : { theme : 'islands', size : 'm', visible : true }
            },
            {
                block: 'material-card'
            }
        ]
    },
    {
        tech: 'bh',
        mustDeps : [
            {
                block: 'material-card'
            }
        ]
    },
    {
        block: 'post-form',
        tech: 'js',
        shouldDeps: {
            tech: 'bh'
        }
    },
    {
        block: 'maxim-popup',
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
        block: 'button',
        mods: {theme: 'islands', size: 'm', view: 'action'},
        tech: 'Add images',
        tech: 'bh'
    },
    {
        block: 'post-video-form',
        tech: 'js'
    }
]
