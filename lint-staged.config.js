module.exports = {
  // This will lint and format js and jsx
  '**/*.(jsx|js)': (filenames) => [
    `npm run eslint --fix ${filenames.join(' ')}`,
  ],
};
