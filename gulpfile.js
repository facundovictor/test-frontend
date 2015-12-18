/**
 * author: facundovictor
 **/

// Gulp's requirements
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    coffee = require('gulp-coffee');

// Specific Tasks -------------------------------------------------------------

// CoffeeScript compilation task
var coffee_src = './src/coffee/**/*.coffee';
gulp.task('coffee', function() {
    gulp.src(coffee_src)
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});

// ----------------------------------------------------------------------------                                                                                                             
// GLOBAL TASKS 

// Simple build
gulp.task('build', [
    'coffee'
]);

gulp.task('default', ['build']);

