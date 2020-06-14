module.exports = {
    entry: '/main.js',             //arquivo principal
    output:{                         // pra qual lugar e arquivo vai enviar o codigo es6+
        path: __dirname +'/public',                //local
        filename: 'bundle.js',          //nome do arquivo
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            }      

        ],
    },
}