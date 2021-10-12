const gulp = require(`gulp`);
const rename = require(`gulp-rename`);
const svgstore = require(`gulp-svgstore`);

const svgSprite = () => {
  return gulp
    .src(`src/img/icon-*.svg`)
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename(`sprite.svg`))
    .pipe(gulp.dest(`build/img`));
};

module.exports = svgSprite;
