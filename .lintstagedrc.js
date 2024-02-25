module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(jsx|js)': (filenames) => [`npm run eslint ${filenames.join(' ')}`],
};
