
var mix = require('laravel-mix');

mix
    .js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .sass('resources/sass/custom.scss', 'public/css/custom.css')

    .styles([
        'public/css/app.css',
        'public/css/fullpage.min.css',
        'public/css/custom.css'
        ],
        'public/css/all.css')

    .scripts([
        'public/js/app.js',
        'public/js/fullpage.min.js'
        // 'public/js/custom.js'
        ],
        'public/js/all.js')

    .version()

    .browserSync('sandiplusnew.loc');




