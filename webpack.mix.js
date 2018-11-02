var mix = require('laravel-mix');

mix
    .js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .sass('resources/sass/custom.scss', 'public/css/custom.css')
    .sass('resources/sass/custom_main.scss', 'public/css/custom_main.css')
    .sass('resources/sass/custom_company.scss', 'public/css/custom_company.css')
    .sass('resources/sass/custom_blog.scss', 'public/css/custom_blog.css')
    .sass('resources/sass/custom-media-queries.scss', 'public/css/custom-media-queries.css')

    .styles([
        'public/css/app.css',
        'public/fonts/SF/sf-fonts.css',
        'public/css/custom.css',
        'public/css/custom_main.css',
        'public/css/custom_company.css',
        'public/css/custom_blog.css',
        'public/css/custom-media-queries.css'
        ],
        'public/css/all.css')

    .scripts([
        'public/js/app.js',
        'public/plagins/unitegallery/unitegallery.js',
        'public/plagins/unitegallery/ug-theme-tiles.js',
        'public/js/custom.js'
        ],
        'public/js/all.js')

    .version()

    .browserSync('sandiplusnew.loc');

