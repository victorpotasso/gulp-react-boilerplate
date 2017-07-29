const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const plugins = require('gulp-load-plugins');
const jest = require('gulp-jest').default;

/**
 * Task: BABEL
 *
 * @description Babel has support for the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax, right now without waiting for browser support
 * @see https://babeljs.io/docs/setup/#installation
 */
gulp.task('babel', () => {
  const b = browserify({ entries: ['src/boot.js'] }).transform(babelify);
  function bundle() {
    console.log('>>', plugins());
    b.bundle()
        .on('error', function e(error) {
          const args = Array.prototype.slice.call(arguments);

          plugins().notify.onError({
            title: 'Babel Error',
            message: '<%= error.message %>',
          }).apply(this, args);

          console.error(error);

          this.emit('end');
        })
        .pipe(source('boot.js'))
        .pipe(buffer())
        .pipe(plugins().sourcemaps.init({ loadMaps: true }))
        .pipe(plugins().sourcemaps.write('.'))
        .pipe(gulp.dest('public/assets/js'))
        .pipe(browserSync.stream());
  }
  bundle();
});

/**
 * Task: jest
 */
gulp.task('jest', () => gulp.src('src').pipe(jest({
  config: {
    testRegex: '(/src/(components/containers)/.*|\\.(test|spec))\\.(jsx?)$',
    moduleFileExtensions: [
      'js',
      'json',
      'jsx',
    ],
    transformIgnorePatterns: [
      '<rootDir>/public/',
      '<rootDir>/node_modules/',
      '<rootDir>/src/generators',
    ],
  },
})));

/**
 * Task: public
 */
gulp.task('public', () => {
  gulp.src(['src/public/**/**'])
        .pipe(gulp.dest('public'));
});

/**
 * Task: Build
 */
gulp.task('build', ['babel']);

/**
 * Task: Serve
 */
gulp.task('serve', ['build'], () => {
  browserSync.init({
    server: {
      baseDir: 'public',
    },
  });
  gulp.watch('src/public/**/**', ['public']).on('change', browserSync.reload);
  gulp.watch('src/**/**.js', ['babel']);
  gulp.watch('gulpfile.js', ['build']);
});

/**
 * Task: Default
 */
gulp.task('default', ['public', 'build', 'serve']);
