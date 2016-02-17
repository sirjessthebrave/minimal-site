// Include gulp
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var babelify = require('babelify');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var yargs = require('yargs');

var runExpress = function() {
  var express = require('express');
  var app = express();
  app.use(express.static('sass'));
  app.listen(4000);
};

// Compile Sass, run autoprefixer, and create sourcemaps
gulp.task('styles', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on("error", notify.onError("Error: <%= error.message %>")))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 8'],
      cascade: false
    }))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('stylesheets'))
    .pipe(notify({ message: 'sass task complete' }));
});

// Lint JS
gulp.task('lint', function() {
  return gulp.src('js/es6/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'Linting complete' }));
});

// Browserify Scripts
gulp.task('browserify', function() {
  return browserify('js/es6/main.js', { debug: true })
    .transform(babelify)
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('javascript.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('js'));
});

// Watch for changes
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('sass/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('js/es6/*.js', ['lint']);
  gulp.watch('js/es6/*.js', ['browserify']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in public/, reload on change
  gulp.watch(['stylesheets', 'js']).on('change', livereload.changed);

  runExpress();
});

// Default task
gulp.task('default', ['watch']);