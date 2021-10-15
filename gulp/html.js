const gulp = require(`gulp`);
const htmlmin = require(`gulp-htmlmin`);

const html = () => {
  return gulp.src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

module.exports = html;
