import babelify from 'babelify';
import browserSync from 'browser-sync';
import browserify from 'browserify';
import del from 'del';
import gulp from 'gulp';
import source from 'vinyl-source-stream';
import uglify from 'gulp-uglify';


gulp.task('build', ['browserify', 'uglify']);
gulp.task('clean:dist', del.bind(null, ['dist']));
gulp.task('clean:tmp', del.bind(null, ['.tmp']));
gulp.task('default', ['build']);
gulp.task('reload', ['clean:tmp', 'browserify'], browserSync.reload);
gulp.task('serve', ['watch', 'clean:tmp', 'browserify', 'browsersync']);


const _browserify = function(src, name, dest) {
  browserify({entries: src, debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source(name))
    .pipe(gulp.dest(dest));
};


gulp.task('browserify', ['clean:tmp'], () => {
  _browserify('scripts/main.js', 'iframe-rotator.js', '.tmp/scripts');
  _browserify('spec/main.js', 'tests.js', '.tmp/spec');
});


gulp.task('watch', () => {
  gulp.watch('scripts/*.js', ['reload']);
  gulp.watch('spec/*.js', ['reload']);
});


gulp.task('uglify', () => {
  gulp.src('.tmp/scripts/iframe-rotator.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


gulp.task('browsersync', ['clean:tmp'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: 'spec',
      routes: {
        '/scripts': '.tmp/scripts',
        '/spec': '.tmp/spec',
        '/bower_components': 'bower_components'
      }
    }
  });
});
