const js = require(`./js`);
const css = require(`./css`);
const gulp = require(`gulp`);
const copy = require(`./copy`);
const html = require(`./html`);
const clean = require(`./clean`);
const svgsprite = require(`./svgsprite`);

const build = gulp.series(clean, copy, css, svgsprite, html, js);
module.exports = build;
