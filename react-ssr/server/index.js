require('babel-register')({
    presets: ['env', 'react'],
    plugins: [
        'syntax-dynamic-import',
        'dynamic-import-node'
    ]
});

require('./server');