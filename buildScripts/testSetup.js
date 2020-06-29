// This file isn't transpiled, so must use Common JS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
// Mocha doesn't understand the import css thing so it treats it like an empty function.
require.extensions['.css'] = function() {};
