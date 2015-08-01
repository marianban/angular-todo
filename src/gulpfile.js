var del = require('del');

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['watch']);

gulp.task('watch', function () {
  gulp.watch('app/**/*.js', ['compile-scripts']);
  gulp.watch('styles/**/*.less', ['compile-less']);
});

gulp.task('compile-less', ['clean-css'], function () {
  return gulp.src('styles/styles.less')
    .pipe(less({
      paths: ['src']
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean-css', function (cb) {
  return del([
    'dist/*.css'
  ], cb);
});

gulp.task('compile-scripts', ['clean-scripts'], function () {
  return gulp.src(['app/app.module.js', 'app/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean-scripts', function (cb) {
  return del([
    'dist/**/*.js'
  ], cb);
});
