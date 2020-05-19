const gulp = require(`gulp`);
const babel = require(`gulp-babel`);
const rename = require(`gulp-rename`);
const rollup = require(`gulp-rollup`);
const plumber = require(`gulp-plumber`);
const sourcemaps = require(`gulp-sourcemaps`);
// const terser = require(`gulp-terser`);

module.exports = function js() {
  return (
    gulp
      .src(`./src/js/**/*.js`)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(
        rollup({
          input: `./src/js/main.js`,
          format: `iife`,
        })
      )
      .pipe(
        babel({
          presets: [`@babel/env`],
        })
      )
      // .pipe(terser())
      .pipe(rename(`main.min.js`))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(`build/js`))
  );
};
