const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MergeFilesPlugin = require('merge-files-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    name: 'main',
    entry: {
        main: './frontend/main.js',
        vendor: './frontend/vendor.js',
        style: './frontend/sass/main.scss',
        theme: './frontend/vendor/light-bootstrap-dashboard.css',
        custom: './frontend/sass/custom.scss'
    },
    output: {
        path: path.resolve(__dirname, './src/main/resources/static/js/'),
        publicPath: '/js/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                }),
                exclude: /node_modules/
            },
            {
                test: /\.sass$/,
                use:  ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: [
                        'css-loader',
                        'sass-loader?indentedSyntax'
                    ],
                }),
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '../fonts/[name].[ext]',
                    }
                }]
            },
            {
                test: /\.exec\.js$/,
                use: [ 'script-loader' ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './frontend/')
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, "/src/main/resources/static"),
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    plugins: [
        new WebpackNotifierPlugin({excludeWarnings: true, alwaysNotify: false, skipFirstNotification: true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin({
            filename: '../css/[name].css'
        }),
    ]
}

if (process.env.NODE_ENV === 'production') {

    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.devtool = '#source-map';

    module.exports.plugins = (module.exports.plugins || []).concat([
        new CleanWebpackPlugin(
            [
                'css/*.*',
                'fonts/*.*',
                'js/*.*'
            ],
            {
                root: path.resolve(__dirname, './src/main/resources/static/')
            }
        ),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}
