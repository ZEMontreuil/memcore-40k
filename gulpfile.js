const {src, dest, series, parallel, watch} = require('gulp');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const ghPages = require('gh-pages');

let htmlTasks = function () {
  return src('src/*.html')
    .pipe(dest('dist/'));
}

let jsTasks = function() {
  return src('src/**/*.js', {sourcemaps: true})
  .pipe(minify({
    noSource: true,
  }))
  .pipe(dest('dist/', {sourcemaps: true}));
}

let styleTasks = function () {
  return src('src/**/*.css', {sourcemaps: true})
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/', {sourcemaps: true}));
}

let deploy = () => {
  return ghPages.publish('dist', err => {

  });
}

exports.tasks = parallel(htmlTasks, jsTasks, styleTasks);
exports.deploy = series(deploy);
