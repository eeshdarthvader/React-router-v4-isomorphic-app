/**
 * webpack.config.client.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');
const devTools = "cheap-module-source-map";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");


var webpack = require('webpack');

module.exports = {
    context: srcPath,
    target: 'web',

    entry: './client/index.js',
    output: {
        path: distPath,
        filename: 'client.min.js',
        publicPath: '/'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
     new webpack.optimize.DedupePlugin(),
     new CompressionPlugin({   
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
      new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    mangle: true,
    debug: false,
    minimize: true,
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true
    }
  }),
      new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin()
 
    ],
    module: {
	    loaders: [
	      {
	        test: /.jsx?$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	        query: {
	          presets: ['es2015', 'react']
	        }
	      },
	      { 
	        test: /\.css$/, 
	        loader: "style-loader!css-loader" 
	      },
	      { 
	        test: /\.png$/, 
	        loader: "url-loader?limit=100000" 
	      },
	      { 
	        test: /\.jpg$/, 
	        loader: "file-loader" 
	      },
	      { 
	       	test: /\.(jpe?g|png|gif|svg|ico)$/i, 
	       	loader: "file-loader?name=/[name].[ext]"
	      },
	      {
	        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
	        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
	      },
	      {
	        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
	        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
	      },
	      {
	        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
	        loader: 'file-loader'
	      },
	      {
	        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
	        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
	      }
	    ]
    },
    devtool: 'cheap-module-source-map'
};

