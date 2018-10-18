window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');

$( document ).ready(function() {
    console.log('bootstrap version - ' + $.fn.tooltip.Constructor.VERSION);
});
