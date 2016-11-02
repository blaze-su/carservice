var i = require('./init.json');

var gulp = require('gulp');
const sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    notify = require('gulp-notify');

// sass
gulp.task('sass', function () {
    gulp.src(i.src + '/sass/*.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 1%', 'ie 9']
        }))
        //        .pipe(cleanCSS())
        .pipe(gulp.dest(i.dest + '/css'))
        .pipe(connect.reload())
        .pipe(notify('sass done!'));
});

