/**
 * For each entry, `key` is the chunk name, `value` has following properties:
 * - value.entry: webpack entry.
 * - value.html: options object passed to HtmlWebpackPlugin.
 * - value.html.inlineSource: if true, JS and CSS files will be inlined in HTML.
 */

const SPECTRE = 'https://cdn.jsdelivr.net/npm/spectre.css@0.5.3/dist/spectre.min.css';

module.exports = {
  index: {
    html: {
      title: '掉下来',
      inlineSource: true,
      css: [
        SPECTRE,
      ],
    },
  },
};
