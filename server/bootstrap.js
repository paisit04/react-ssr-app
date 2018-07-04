require('ignore-styles');
require('url-loader');
require('file-loader');
require( "babel-register" )( {
    ignore: [ /(node_modules)/ ],
    presets: [ "env", "react" ],
} );
require("./server");