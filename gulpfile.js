'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('js', function () {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
  return gulp.src(['**/mfb.css', '**/mfb.css.map', '**/*.scss'], { base: './mfb/src/' })
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['js', 'css']);
