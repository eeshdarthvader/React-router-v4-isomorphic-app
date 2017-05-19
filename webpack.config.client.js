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

module.exports = {
    context: srcPath,
    target: 'web',

    entry: './client/index.js',
    output: {
        path: distPath,
        filename: 'client.js',
        publicPath: '/'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
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
	       	test: /\.(jpe?g|png|gif|svg)$/i, 
	       	loader: "file-loader?name=/public/images/[name].[ext]"
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
    devtool: 'source-map'
};

