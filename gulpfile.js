'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('js', function(){
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build'));
});

gulp.task('css', function(){
  return gulp.src(['./mfb/src/mfb.css', './mfb/src/mfb.css.map', './mfb/src/mfb.scss'])
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['js', 'css']);
