//sudo apt-get installnodejs-legacy
//sudo npm init
//sudo npm install -g gulp
//sudo npm install --save-dev gulp-shell lodash gulp browser-sync
//And create a gulpfile.js with:

//sudo npm install -g bower
//sudo chown -R user:user /home/user/.config/configstore/
//bower install bootstrap


var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

gulp.task('bower', function() {
    gulp.src('./bower_components/**/dist/**/*.*').pipe(gulp.dest('./vendor'))
});

gulp.task('build', ['bower'], shell.task(['jekyll build --watch']));

gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['bower', 'build', 'serve']);
