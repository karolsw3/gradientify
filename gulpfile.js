var gulp = require('gulp')
var pug = require('gulp-pug')
const debug = require('gulp-debug')
var stylus = require('gulp-stylus')

gulp.task('html', function () {
  return gulp.src('src/*.pug')
    .pipe(debug({title: 'Html:'}))
    .pipe(pug())
    .pipe(gulp.dest(''))
})

gulp.task('css', function () {
  return gulp.src('src/*.styl')
    .pipe(debug({title: 'Css:'}))
    .pipe(stylus())
    .pipe(gulp.dest('css'))
})

gulp.task('default', [ 'html', 'css' ])
