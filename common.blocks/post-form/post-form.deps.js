[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        {elems: ['additional','form']},
        {block: 'button',mods : { theme : 'islands', size : 'm', view : 'action' }},
        'spin',
        'insert',
        'white-form',
        {block: 'insert', mods:{type: 'link'}},
        {block: 'insert', mods:{type: 'tube'}},
        {block: 'insert', mods:{type: 'image'}},
        {block: 'material-card'},
        'maxim-popup'
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
            {block: 'maxim-popup'}
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
        block: 'white-form',
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
        block: 'button',
        mods: {theme: 'islands', size: 'm', view: 'action'},
        text: 'Add images',
        tech: 'bh'
    }
]
