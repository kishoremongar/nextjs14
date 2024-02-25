module.exports = {
  '**/*.(ts|tsx|js)': (filenames) => [
    `npm run eslint -- --fix ${filenames.join(' ')}`,
  ],
};
