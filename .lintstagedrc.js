module.exports = {
  '**/*.(js|jsx)': (filenames) => [
    `npm run eslint -- --fix ${filenames.join(' ')}`,
  ],
};
