window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');
require('imagesloaded');
var jQueryBridget = require('jquery-bridget');
var Masonry = require('masonry-layout');
jQueryBridget( 'masonry', Masonry, $ );

$( document ).ready(function() {
    console.log('bootstrap version - ' + $.fn.tooltip.Constructor.VERSION);
});
