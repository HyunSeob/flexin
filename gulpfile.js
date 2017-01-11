const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build', () => {
  const processors = [
    cssnext({browsers: ['last 1 version']})
  ];

  return gulp.src('./src/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('../map'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  return gulp.watch('./src/*.css', ['build']);
});

gulp.task('default', ['build']);
