var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var server = require('gulp-server-livereload');
var install = require("gulp-install");
var run = require('gulp-run');

var devServerHost = 'localhost'; //require('ip').address();

gulp.task( 'server', ['build'], function() {
  gulp.src('./www')
    .pipe(server({
      livereload: true,
      clientConsole: false,
      directoryListing: false,
      open: false,
      host: devServerHost,
      port: 3000
    }));
});

gulp.task('less', [], function(done) {
  gulp.src('./less/style.less')
    .pipe(less())
    .on('error', function(error) {
      console.error(error.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('bootstrap', [], function(done) {
  var ends = 5;
  function end() {
    if (--ends) return;
    done();
  }
  gulp.src(['./node_modules/bootstrap/dist/**/', '!./**/npm.js'], {base: './node_modules/bootstrap/dist'})
    .pipe(gulp.dest('./www/lib/bootstrap/'))
    .on('end', end);
  gulp.src(['./node_modules/bootstrap/docs/assets/js/ie10-viewport-bug-workaround.js'], {base: './node_modules/bootstrap/docs/assets'})
    .pipe(gulp.dest('./www/lib/assets/'))
    .on('end', end);
  gulp.src(['./node_modules/html5shiv/dist/**/*'])
    .pipe(gulp.dest('./www/lib/html5shiv/'))
    .on('end', end);
  gulp.src(['./node_modules/Respond.js/dest/**/*'])
    .pipe(gulp.dest('./www/lib/respond/'))
    .on('end', end);
  gulp.src(['./node_modules/jquery/dist/*', '!./**/cdn'])
    .pipe(gulp.dest('./www/lib/jquery/'))
    .on('end', end);
});

gulp.task('angular-ui-bootstrap-install', function(done) {
  //~ process.chdir('node_modules/angular-ui-bootstrap');
  return gulp.src(['./node_modules/angular-ui-bootstrap/package.json'])
    .pipe(gulp.dest('./node_modules/angular-ui-bootstrap'))
    .pipe(install())

});

gulp.task('angular-ui-bootstrap-grunt', ['angular-ui-bootstrap-install'], function(done) {
  run('grunt --base ./node_modules/angular-ui-bootstrap --gruntfile ./node_modules/angular-ui-bootstrap/gruntfile.js html2js build')
    .exec('', function() {
      done();
    });
})

gulp.task('angular-ui-bootstrap', ['angular-ui-bootstrap-grunt'], function(done) {
  var ends = 1;
  function end() {
    if (--ends) return;
    done();
  }
  gulp.src(['./node_modules/angular-ui-bootstrap/dist/**/*.js'])
    .pipe(rename(function (path) {
        path.basename = 'angular-' + path.basename.replace(/-\d\..*?(\.min)?$/, '$1');
    }))
    .pipe(gulp.dest('./www/lib/angular/js/'))
    .on('end', end);
  // For use with non embeded templates
  ////gulp.src(['./node_modules/angular-ui-bootstrap/template/**'])
  ////  .pipe(gulp.dest('./www/template'))
  ////  .on('end', end);
})

gulp.task('angular', [], function(done) {
  var ends = 6;
  function end() {
    if (--ends) return;
    done();
  }
  gulp.src(['./node_modules/angular/angular.js', './node_modules/angular/**/angular.min.js'])
    .pipe(gulp.dest('./www/lib/angular/js/'))
    .on('end', end);
  gulp.src(['./node_modules/angular-ui-router/release/**/*'])
    .pipe(gulp.dest('./www/lib/angular/js/'))
    .on('end', end);
  gulp.src(['./node_modules/angular/angular-csp.css'])
    .pipe(gulp.dest('./www/lib/angular/css/'))
    .on('end', end);
  gulp.src(['./node_modules//angular-animate/angular-animate.*'])
    .pipe(gulp.dest('./www/lib/angular/js/'))
    .on('end', end);
  gulp.src(['./node_modules/angular-resource/angular-resource.*'])
    .pipe(gulp.dest('./www/lib/angular/js/'))
    .on('end', end);
  gulp.src(['./node_modules/angular-ui-bootstrap/src/*/*.js'])
    .pipe(concat('angular-ui-bootstrap.js'))
    .pipe(gulp.dest('./www/lib/angular/js'))
    .on('end', end);
  gulp.src(['./node_modules/angular-ui-bootstrap/src/*/*.js'])
    .pipe(uglify('angular-ui-bootstrap.min.js',{
      outSourceMap: true
    }))
    .pipe(gulp.dest('./www/lib/angular/js'))
    .on('end', end);
});

gulp.task('require', [], function(done) {
  var ends = 1;
  function end() {
    if (--ends) return;
    done();
  }
  gulp.src(['./node_modules/requirejs/require.js'])
    .pipe(gulp.dest('./www/lib/require'))
    .on('end', end);
});

gulp.task('install', ['build', 'angular', 'require', 'bootstrap', 'angular-ui-bootstrap'], function(done) {
  done()
});

gulp.task('build', ['less'], function(done) {
  done()
});

gulp.task('default', ['watch', 'server']);
