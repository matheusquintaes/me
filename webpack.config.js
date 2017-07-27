const webpack = require('webpack')

module.exports = {
    entry : './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(html)$/,
                use: 'html-loader'
            },
            
            
        ]
    },
    devServer: {
        port: 9090,
        contentBase: './src'
    }
}