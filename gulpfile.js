var gulp = require('gulp');

var projectRoot = 'app/';
var buildRoot = 'build/app';

gulp.task('default', ['html', 'css'], function() {
  // place code for your default task here
  console.log("DEFAULT GULP TASK RUNNING....");
});

gulp.task('html', function(){
    console.log("html TASK RUNNING....");
    return gulp.src(projectRoot +'**/*.html')
    .pipe(gulp.dest(buildRoot))
});

gulp.task('css', function(){
    console.log("css TASK RUNNING....");
    return gulp.src(projectRoot +'**/*.css')
    .pipe(gulp.dest(buildRoot))
});