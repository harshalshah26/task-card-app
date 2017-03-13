var gulp = require("gulp");//http://gulpjs.com/
var	sass = require("gulp-sass");//https://www.npmjs.org/package/gulp-sass
var del = require("del");
var runSequence = require('run-sequence');

var sourceRoot = 'src/';
var buildRoot = 'build/';

var paths = {
  sourceRoot: sourceRoot ,
  buildRoot: buildRoot,
  templates: [sourceRoot+'**/*.html'],
  styles: [sourceRoot+'/**/*.scss']
};

gulp.task('build', function(){
  runSequence('clean-build', ['build-templates', 'build-styles']);
});

gulp.task('clean-build', function() {
  return del(['./build']);
});

gulp.task('build-templates', function(){
    return gulp.src(paths.templates)
    .pipe(gulp.dest(paths.buildRoot))
});

gulp.task("build-styles", function(){
    return gulp.src(paths.styles)
		.pipe(sass({ style: 'expanded' }))
		.pipe(gulp.dest(paths.buildRoot));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.templates, ['build-templates']);
  gulp.watch(paths.styles, ['build-styles']);
});

gulp.task('default', function(){
  console.log("DEFAULT TASK RUNNING");
});