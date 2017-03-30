// pretty simple build file for the TS Programming Tests 
const gulp       = require('gulp');
const typescript = require('gulp-tsc'); 
const tscConfig  = require('./tsconfig.json');
const mocha      = require('gulp-mocha');
const util       = require('gulp-util');
const chai       = require('chai');

// compile all the test problems
gulp.task('compile', function () {
    return gulp
    .src([
      'ptests.specs.ts',
      'src/**/*.ts'
    ], { base: "." })
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('.'))
});

gulp.task('test', function () {
  return gulp.src("./ptests.specs.js", {read:false})
  .pipe(mocha({reporter:'spec'}));
});
