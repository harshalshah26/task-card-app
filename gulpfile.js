var gulp = require("gulp");//http://gulpjs.com/
var	sass = require("gulp-sass");//https://www.npmjs.org/package/gulp-sass

const projectRoot = 'src/**/';
const buildRoot = 'build/';

gulp.task('default', ['html', 'scss'], function() {
  // place code for your default task here
  console.log("DEFAULT GULP TASK RUNNING....");
});

gulp.task('html', function(){
    console.log("HTML TASK RUNNING....");
    return gulp.src(projectRoot +'*.html')
    .pipe(gulp.dest(buildRoot))
});

gulp.task('css', function(){
    console.log("CSS TASK RUNNING....");
    return gulp.src(projectRoot +'*.css')
    .pipe(gulp.dest(buildRoot))
});

// gulp.task("sass", function(){
//     console.log("css TASK RUNNING....");
//     return gulp.src(projectRoot +'**/*.scss')
// 		.pipe(sass({ style: 'expanded' }))
// 		.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
// 		.pipe(gulp.dest(buildRoot))
// 		.pipe(rename({suffix: '.min'}))
// 		.pipe(minifycss())
// 		.pipe(gulp.dest('target/css'));
// });

gulp.task("scss", function(){
    console.log("SCSS TASK RUNNING....");
    return gulp.src(projectRoot +'*.scss')
		.pipe(sass({ style: 'expanded' }))
		.pipe(gulp.dest(buildRoot));
});