/**
 * author: facundovictor
 **/

// Gulp's requirements
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    coffee = require('gulp-coffee'),
    stylus = require('gulp-stylus'),
    poststylus = require('poststylus'),
    cssnano = require('gulp-cssnano'),
    jade = require('gulp-jade'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost');

// Specific Tasks -------------------------------------------------------------

// Server connection task
var connect = require('gulp-connect-multi')();
gulp.task('connect', connect.server({
    root: ['public'],
    port: 8080,
    livereload: true,
    open: {
        browser: 'google-chrome'
    }
}));

// COFESCRIPT -----------------------------------------------------------------

// CoffeeScript compilation task with connection reload
var coffee_src = './src/coffee/**/*.coffee';
gulp.task('coffee_reload', function(){
    gulp.src(coffee_src)
        .pipe(sourcemaps.init())
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/js/'))
        .pipe(connect.reload());
});

// CoffeeScript compilation task
gulp.task('coffee', function(){
    gulp.src(coffee_src)
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});

// ----------------------------------------------------------------------------
// JADE

// Jade compilation task with connection reload
var jade_src = './src/jade/**/*.jade';
gulp.task('jade_reload', function(){
    gulp.src(jade_src)
        .pipe(jade({
            locals: {},
            pretty: true
        }))
        .pipe(gulp.dest('./public/'))
        .pipe(connect.reload());
});

// Jade compilation task
gulp.task('jade', function(){
    gulp.src(jade_src)
        .pipe(jade({
            locals: {},
            pretty: true
        }))
        .pipe(gulp.dest('./public/'));
});
// ----------------------------------------------------------------------------
// STYLUS

// Stylus compilation task with connection reload
var stylus_src = './src/stylus/**/*.styl';
gulp.task('stylus_reload', function(){
    gulp.src(stylus_src)
        .pipe(sourcemaps.init())
        .pipe(stylus({
            use: [
                poststylus(['autoprefixer', 'lost'])
            ]
        }))
        // .pipe(cssnano())
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest('./public/css/'))
        .pipe(connect.reload());
});

// Stylus compilation task
gulp.task('stylus', function(){
    gulp.src(stylus_src)
        .pipe(stylus({
            use: [
                poststylus(['autoprefixer', 'lost'])
            ]
        }))
        // .pipe(cssnano())
        .pipe(gulp.dest('./public/css/'));
});


// ----------------------------------------------------------------------------
// IMAGES

// Copy of images
var png_src = './src/images/**/*.png',
    svg_src = './src/images/**/*.svg';
gulp.task('images', function(){
    gulp.src(png_src).pipe(gulp.dest('./public/images/'));
    gulp.src(svg_src).pipe(gulp.dest('./public/images/'));
});

// ----------------------------------------------------------------------------
// DEPENDENCIES
var d3_src = './node_modules/d3/d3.min.js';
var radialprogress_src = './src/lib/radialProgress.js';
var topojson_src = './node_modules/topojson/topojson.min.js';
var datamaps_src = './node_modules/datamaps/dist/datamaps.world.min.js';
gulp.task('dependencies', function(){
    gulp.src([
        d3_src,
        radialprogress_src,
        topojson_src,
        datamaps_src
    ]).pipe(gulp.dest('./public/js/lib/'));
});

// ----------------------------------------------------------------------------
// GLOBAL TASKS

// Watch task
gulp.task('watch', function () {
    gulp.watch([coffee_src], ['coffee_reload']);
    gulp.watch([jade_src], ['jade_reload']);
    gulp.watch([stylus_src], ['stylus_reload']);
});

// Simple build
gulp.task('build', [
    'dependencies',
    'images',
    'coffee',
    'jade',
    'stylus'
]);

// Reloadable build, requires a previous connection
gulp.task('reloadable_build', [
    'dependencies',
    'images',
    'coffee_reload',
    'jade_reload',
    'stylus_reload'
]);

// Build, Launch a server and watch for fast reload
gulp.task('serve', [
    'connect',
    'reloadable_build',
    'watch'
]);

gulp.task('default', ['build']);

