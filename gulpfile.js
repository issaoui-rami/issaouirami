// gulp gulp-concat gulp-autoprefixer gulp-sass gulp-watch gulp-livereload gulp-uglify gulp-notify gulp-sourcemaps
var gulp = require('gulp'),
    watch = require('gulp'),
    concat = require('gulp-concat'),
    prefixer = require('gulp-autoprefixer'),
    sass = require ('gulp-sass'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify'),
    notify = require("gulp-notify"),
    sourcemaps = require('gulp-sourcemaps');

// task sass et css
gulp.task('sass', function(){
  return gulp.src('scss/app.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(prefixer('last 2 versions'))
  .pipe(concat('app.css'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('assets/css'))
  .pipe(notify('sass is done'))
});

gulp.task('watch', function(){
  require('./server.js');
  livereload.listen();
  gulp.watch('scss/**/*.scss', gulp.series('sass'))
});
