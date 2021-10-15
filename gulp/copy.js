const gulp = require(`gulp`);


const copy = (done) => {
  gulp.src([
    `src/*.ico`,
    `src/img/**/*.svg`,
    `src/fonts/**/*.{woff,woff2}`,
  ], {
    base: `src`,
  })
    .pipe(gulp.dest(`build`));
  done();
}


module.exports = copy;
