const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ClientConfig = {
    entry : './src/js/index.js',
    output : {
        path: path.resolve(__dirname , 'build'),
        filename : './client/bundle.js'
    },

    module : {
        rules : [
            {

              test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/,/.webp$/,/.ico$/],
                loader: "file-loader",
                options : {
                    name: "/image/[name].[contenthash].[ext]",
                    publicPath: url => url.replace(/public/, "")
                }

            },
            {
              test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
            },
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
              test: /\.scss$/,
              use: [
                // load in revers order
                MiniCssExtractPlugin.loader /*3. Extract css into files*/,
                'css-loader' /*2. Take your css and turn it into JS*/,
                'sass-loader' /*1. Turns sass into css*/
              ]
            },
            
         
        ]
    },

    plugins :[
      new MiniCssExtractPlugin({ filename: './css/[name].css' }),
      // new HtmlWebpackPlugin({
      //   template : './src/index.html'
      // })
    ],
 


    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      },

      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
 

}

const BackendConfig = {
    entry : './src/server/index.js',
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ig
    output : {
        path: path.resolve(__dirname , 'build'),
        filename : 'server.js'
    },

    module : {
        rules : [
            {

                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/,/.webp$/,/.ico$/],
                loader: "file-loader",
                options : {
                  name: "/image/[name].[contenthash].[ext]",
                    publicPath: url => url.replace(/public/, ""),
                    emitFile : false
                }

            },
            {
              test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
            },
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
              test: /\.scss$/,
              use: [
                // load in revers order
                MiniCssExtractPlugin.loader /*3. Extract css into files*/,
                'css-loader' /*2. Take your css and turn it into JS*/,
                'sass-loader' /*1. Turns sass into css*/
              ]
            },
      

        ]
    },

    plugins :[
      new MiniCssExtractPlugin({ filename: './css/[name].css' }),
    ],
 

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      },
}


module.exports = [ClientConfig,BackendConfig]