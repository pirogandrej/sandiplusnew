window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');

var jQueryBridget = require('jquery-bridget');
var Fullpage = require('fullpage.js');
jQueryBridget( 'fullpage', Fullpage, $ );

global.THREE = require('three');

$( document ).ready(function() {
    console.log('bootstrap version - ' + $.fn.tooltip.Constructor.VERSION);
});
