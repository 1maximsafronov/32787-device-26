const gulp = require(`gulp`);

module.exports = function copy() {
  return gulp
    .src(
      [
        `src/*.ico`,
        `src/img/**`,
        `src/js/**/*.{js,json}`,
        `src/fonts/**/*.{woff,woff2}`,
      ],
      {
        base: `src`,
      }
    )
    .pipe(gulp.dest(`build`));
};
