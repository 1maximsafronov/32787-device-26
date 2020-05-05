const gulp = require(`gulp`);
const include = require(`posthtml-include`);
const htmlmin = require(`gulp-htmlmin`);
const posthtml = require(`gulp-posthtml`);

module.exports = function html() {
  return gulp.src(`src/*.html`)
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(`build`));
};
