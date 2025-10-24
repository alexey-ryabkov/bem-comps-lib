const path = require('path');
const self = require('pug');
// const fs = require('fs');
const cn = require('classnames');
const bem = require('bem-cn');

/**
 * Creates bem block object
 * @type {BemCn}
 */
const b = bem.block;

/**
 * Creates class names string from bem objects or arguments of types that classnames accepted
 * @param {any[]} args
 * @returns {string}
 */
function c(...args) {
  return cn(
    ...args.map((arg) => {
      // transform BemCn objects to string
      if (
        arg &&
        typeof arg.toString === 'function' &&
        arg.toString !== Object.prototype.toString
      ) {
        return arg.toString();
      }
      return arg;
    }),
  );
}

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  pretty: true,
  self: false,
  debug: false,
  compileDebug: false,
  globals: ['window', 'document'],
  locals: {
    title: 'Bemly UI-kit',
    tagline: 'Ещё один ненужный UI-kit',
    libName: 'Bemly',
    aboutLink:
      'https://github.com/alexey-ryabkov/bem-comps-lib?tab=readme-ov-file',
    // slides: JSON.parse(
    //   fs.readFileSync(path.resolve(__dirname, 'src/slides.json')),
    // ),
    theme: { color: '#006d75' },
    renderTmpl: (/** @type {string} */ path, options = {}) =>
      self.renderFile(`${srcPath}/${path}`, options),
    render: (/** @type {string} */ tmpl, options = {}) =>
      self.render(tmpl, options),
    srcPath,
    self,
    b,
    c,
  },
};
