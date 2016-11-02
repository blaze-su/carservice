var i = require('./init.json');

var gulp = require('gulp');
const livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    notify = require('gulp-notify');

// server connect
gulp.task('connect', function() {
    connect.server({
        root: i.dest,
        livereload: true
    });
});