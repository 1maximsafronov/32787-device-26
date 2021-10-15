const gulp = require(`gulp`);
const webp = require(`gulp-webp`);

const createWebp = () => {
  return gulp
    .src(`src/img/**/*.{png,jpg}`)
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest(`build/img`));
};


module.exports = createWebp;
