const mix = require('laravel-mix')

mix.js('src/js/app.js', 'js')

mix.sass('src/sass/app.scss', 'css')

mix.setPublicPath('public')

mix.browserSync('pgp-new.test')
