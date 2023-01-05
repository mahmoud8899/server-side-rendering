const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')


module.exports = {

    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundel.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }

            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
            {

                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,

                type: 'asset/resource',

            },

            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            }


        ],
    },


    resolve: {
        extensions: ['.js', '.json', '.wasm', '.jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
}