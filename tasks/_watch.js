var i = require('./init.json');

var gulp = require('gulp');

// watch
gulp.task('watch',function(){
//    gulp.watch(i.src + '/sass/**/*.sass',['sass']);
    gulp.watch(i.src + '/*.pug',['pug']);
//    gulp.watch(i.dest + '/*.html',['bower']);
});