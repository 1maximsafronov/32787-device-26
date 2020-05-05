const gulp = require(`gulp`);
const css = require(`./css`);
const html = require(`./html`);
const copy = require(`./copy`);
const server = require(`browser-sync`).create();

function refresh(done) {
  server.reload();
  done();
}

module.exports = function localserver() {
  server.init({server: `build`, notify: false, open: true, cors: true, ui: false});

  gulp.watch(`src/*.html`, gulp.series(html, refresh));
  gulp.watch(`src/img/icon-*.svg`, gulp.series(html, refresh));
  gulp.watch(`src/sass/**/*.{scss,sass}`, gulp.series(css, refresh));
  gulp.watch(`src/js/*.js`, gulp.series(copy, refresh));
};
