/**
 * this script make babel compile also the all the test folder files
 */
// register babel to transpile before the test run
// require('babel-register')();

// disable webpack feature that Mocha doen't understand
require.extensions['.sass'] = () => {};
