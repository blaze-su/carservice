var gulp = require('gulp');
var hub = require('gulp-hub');
var runSequence = require('run-sequence');

hub(['./tasks/_*.js'])

gulp.task('default', (callback) => {
    runSequence(
        'connect',
        'pug',
//        'sass',
//        'bower',
        'watch', callback);
});