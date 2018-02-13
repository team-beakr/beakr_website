var webpack = require('webpack');
var path = require("path");

var DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
	context: CLIENT_DIR,

	entry: "./main",

	output: {
		path:     DIST_DIR,
		filename: "bundle.js"
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
        use: [
          'file-loader'
        ]
      }
    ]
  },

	resolve: {
		extensions: ['.js']
	}
};
