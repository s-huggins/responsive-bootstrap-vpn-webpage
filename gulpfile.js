const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
/**
 * npm i -D browser-sync
 * const browserSync = require('browser-sync')
 */

// compile scss into css

function style() {
  return gulp
    .src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
}

// function styleBS() {
//   return gulp
//     .src('./scss/bootstrap/bootstrap.scss')
//     .pipe(sass())
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('./css'));
// }

// function watch() {
//   gulp.watch('./scss/**/*.scss', gulp.parallel(style, styleBS));
// }

function watch() {
  gulp.watch('./scss/**/*.scss', gulp.parallel(style));
}

exports.style = style;
exports.watch = watch;
// exports.run = gulp.series(style, watch);
