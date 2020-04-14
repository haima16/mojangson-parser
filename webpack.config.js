const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        app: './src/parse/index.ts'
    },
    output: {
        filename: 'parse.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ]
            }
        ]
    }
}