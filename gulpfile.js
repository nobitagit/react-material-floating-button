'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('js', function(){
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['js']);
