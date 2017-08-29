var gulp        = require('gulp');
var ts = require('gulp-typescript');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var removeLines = require('gulp-remove-lines');
var order = require("gulp-order");
var browserify = require('gulp-browserify');

function tsProject(){
  return gulp.src(['!./src/*.spec.ts', './src/*.ts'])
        .pipe(ts.createProject('tsconfig.json')())
}
gulp.task('watch', function () {
  gulp.watch('./sass/*.ts', ['ts']);
});

gulp.task('ts', function () {
    return tsProject()
          .pipe(gulp.dest('build/'));
});

gulp.task('build', ['ts'], function () {
      tsProject().js
          .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production,
            paths: ['./src']
          }))
          .pipe(order([
                        "IfcDataProviderBase.js",
                        "IfcDataProvider.js",
                        "IfcDataProviderSingleton.js",
                        "DataProviderBase.js",
                        "DataProvider.js",
                        "DataProviderSingleton.js"
                      ]))
          .pipe(concat('main.js'))
          .pipe(gulp.dest('./lib'))

      tsProject().dts
          .pipe(removeLines({'filters': [
            /import.*/g
          ]}))
          .pipe(removeLines({'filters': [
            /import.*/g
          ]}))
          .pipe(concat('main.d.ts'))
          .pipe(gulp.dest('./lib'))
});