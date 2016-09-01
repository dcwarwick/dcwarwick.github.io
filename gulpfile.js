/* jshint globalstrict: true */
/* globals require */
/* globals console */
'use strict';

const gulp = require('gulp');

// Core
const browserSync = require('browser-sync');
const del = require('del');
const path = require('path');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const spy = require('gulp-spy');

// Jekyll
const cp = require('child_process');

// Styles
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const scssLint = require('gulp-scss-lint');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

// Folder Paths
const dist = './_site/';
const src = './src/';

// trace options
const trace = true;  // set true to trace build pipelines

// Browser Sync
gulp.task('browser-sync', () =>
  browserSync({
    server: {
      baseDir: path.normalize(dist)
    }
  })
);

// Clean
gulp.task('clean', () => {
  return del([
    path.normalize(dist)
  ]);
});

// CSS
gulp.task('styles', function() {
  return gulp.src(path.join(src, '_sass/**/*.scss'))
    .pipe(spy({ log: trace, prefix: 'styles:' }))
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        this.emit('end');
      }}))
    .pipe(spy({ log: trace, prefix: 'styles:' }))
    .pipe(scssLint())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: ['> 1%', 'last 2 versions']})
    ]))
    .pipe(sourcemaps.write({ includeContent: false }))
    .pipe(spy({ log: trace, prefix: 'styles:' }))
    .pipe(gulp.dest(path.join(dist, 'css')))
    .pipe(browserSync.reload({ stream: true }));
});

// Jekyll
gulp.task('jekyll-build', function(gulpCallBack) {
  var jekyll = cp.spawn('jekyll', ['build'], {stdio: 'inherit'});

  jekyll.on('exit', function(code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload();
});

// Default
gulp.task('watch', ['browser-sync'], () => {
  gulp.watch(path.join(src, '_sass/**/*.scss'), ['styles']);
  gulp.watch([path.join(src, '**/*.html'), path.join(src, '**/*.md'), path.join(src, '_posts/*'), path.join(src, 'assets/**.*')], ['jekyll-rebuild']);
});

// Build
gulp.task('default', (cb) =>
  runSequence(
    'clean',
    'styles',
    'jekyll-build',
    'watch',
    cb
  )
);
