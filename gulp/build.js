const js = require(`./js`);
const css = require(`./css`);
const gulp = require(`gulp`);
const copy = require(`./copy`);
const html = require(`./html`);
const clean = require(`./clean`);

const build = gulp.series(clean, copy, css, html, js);
module.exports = build;
