// require babel-register and set Babel presets options to es2015
require('babel-register')({
    presets: [ 'es2015' ]
});
var webdriverio = require('webdriverio');
require('colors');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var should = chai.should();
chaiAsPromised.transferPromiseness = webdriverio.transferPromiseness;
exports.should = should;
var options = require('./router.js');
var client = webdriverio.remote(options);
chaiAsPromised.transferPromiseness = client.transferPromiseness;

