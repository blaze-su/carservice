var i = require('./init.json');

var gulp = require('gulp');
const pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    notify = require('gulp-notify');


gulp.task('pug', function () {
    gulp.src(i.src + '/*.pug')
        .pipe(pug({ pretty: true }))
// .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(i.dest+"/"))
 .pipe(connect.reload())
        .pipe(notify('PUG DONE!'));

    console.log(i.src + '/*.pug');
});

