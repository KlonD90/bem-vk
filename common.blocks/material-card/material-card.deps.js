[
    {
        mustDeps : { block : 'i-bem', elems : 'dom' },
        shouldDeps: [
            'slider',
            'material-card'
        ]
    },
    {
        block: 'slider',
        tech: 'js',
        shouldDeps: {
            tech: 'bh'
        }
    },
    {
        block: 'material-card',
        tech: 'js',
        shouldDeps: {
            tech: 'bh'
        }
    },
    {
        block: 'slider',
        tech: 'bh'
    }
]
