var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sassLint = require('gulp-sass-lint');

sass.compiler = require('node-sass');

gulp.task('sass:lint', function () {
  return gulp.src('./src/scss/**/*.scss')
  .pipe(sassLint())
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError());
});

gulp.task('sass', function () {
  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename('darkstrava.min.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass:lint', 'sass'));
});
