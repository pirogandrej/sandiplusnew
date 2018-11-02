var jQueryBridget = require('jquery-bridget');
var Fullpage = require('fullpage.js');

window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');
jQueryBridget( 'fullpage', Fullpage, $ );

$( document ).ready(function() {
    console.log('bootstrap version - ' + $.fn.tooltip.Constructor.VERSION);
});
