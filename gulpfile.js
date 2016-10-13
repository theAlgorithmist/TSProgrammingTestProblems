// pretty simple build file for the TS Programming Tests 
const gulp       = require('gulp');
const typescript = require('gulp-tsc'); 
const tscConfig  = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const liveServer = require('gulp-server-livereload'); 

// compile all the test problems
gulp.task('compile', function () {
    return gulp
    .src([
      'ptests.specs.ts',
      './src/**/*.ts'
    ], { base: "." })
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("./"));
});

// serve and watch ...
gulp.task('serve', function() {
  gulp.src('./')
    .pipe(liveServer({
      livereload: false,
      defaultFile: 'index.html',
      open: true
    }));

  // if you want to watch for changes
  // gulp.watch(['./src/**/*.ts'], function (file) {
  //   server.notify.apply(server, [file]);
  //});
});
