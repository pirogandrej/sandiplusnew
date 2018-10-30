var jQueryBridget = require('jquery-bridget');
var Fullpage = require('fullpage.js');
var Masonry = require('masonry-layout');

window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');
require('imagesloaded');
jQueryBridget( 'masonry', Masonry, $ );
jQueryBridget( 'fullpage', Fullpage, $ );

$( document ).ready(function() {
    console.log('bootstrap version - ' + $.fn.tooltip.Constructor.VERSION);
});
