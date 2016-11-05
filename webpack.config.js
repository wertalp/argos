/**
* @Author: Patrick Wertal <wertalp>
* @Date:   14-Oct-2016
* @Email:  patrick.wertal@gmail.com
* @Last modified by:   wertalp
* @Last modified time: 17-Oct-2016
* @License: Licenced by PW @2016
*/


var path = require('path');
module.exports = {
    entry: {
      javascript: path.resolve(__dirname,'./src/app.jsx'),
      html: './src/index.html'

    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'app.bundle.js'
    },
module: {
 loaders: [
   {
     test: /.jsx?$/,
     loader: 'babel-loader',
     exclude: /node_modules/,
     query: {
       presets: ['es2015', 'react']
     },
     progress: true
   },
   {
  test: /\.html$/,
  loader: "file?name=[name].[ext]",
},
 ]
},
};
