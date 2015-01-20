[{
    mustDeps : { block : 'i-bem', elems : 'dom' },
    shouldDeps : [
        {elems: ['additional','form']},
        'button',
        'spin',
        'insert',
        {block: 'insert', mods:{type: 'link'}},
        {block: 'insert', mods:{type: 'tube'}},
        {block: 'insert', mods:{type: 'image'}}
    ]
},
    {
        tech : 'spec.js',
        mustDeps : [
            { tech : 'bemhtml', block : 'button' },
            { tech : 'bh', block : 'button' },
            { block: 'button' },
            { tech : 'bh', block : 'spin'},
            { tech : 'bemhtml', block : 'spin'}
        ]
    },
    {
        shouldDeps: [
            {block: 'button',mods : { theme : 'islands', size : 'm', view : 'action' }},
            {
                block : 'spin',
                mods : { theme : 'islands', size : 'm', visible : true }
            }
        ]
    }
]
