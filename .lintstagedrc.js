module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(jsx|js)': (filenames) => [`yarn eslint ${filenames.join(' ')}`],
};
