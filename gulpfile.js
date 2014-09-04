var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  app = {
    js: './src/js/*.js'
  }

gulp.task('js:valid', function () {
  console.log('Validating js...');
  return gulp.src(app.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('app:watch', function () {
  gulp.watch(app.js, ['js:valid']);
});