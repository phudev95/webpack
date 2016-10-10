var stripComments = require('strip-json-comments');

module.exports = function(source) {
  this.cacheable();

  console.log('source', source);
  console.log('strippedSource', stripComments(source));

  // Clean all comments in JS files
  return stripComments(source);
};