// require babel-register and set Babel presets options to es2015
require('babel-register')({
    presets: [ 'es2015' ]
});

//import path from 'path';
//import {isCI} from '../lib/ci';
var EXTRA_KEY = "com.example.android.testing.espresso.basicsample.MESSAGE";
var EXTRA_STRING_VALUE = 'test';

module.exports = {

    // - - - - CHIMP - - - -
    watch: false,
    // @focus is recommended to use. @dev and @watch are deprecated.
    watchTags: '@focus,@dev,@watch',
    watchWithPolling: false,
    criticalSteps: null,
    criticalTag: '@critical',
    server: false,
    serverPort: 8060,
    serverHost: 'localhost',
    sync: true,
    offline: false,


    // - - - - SELENIUM  - - - -
    browser: 'chrome',
    deviceName: 'Android Emulator',
    name: '',
    user: '',
    key: '',
    port: null,
    host: null,

//- - - - Appium connection - - - -
    host: 'localhost',
    port: 4723,

    // - - - - WEBDRIVER-IO  - - - -

    webdriverio: {
        desiredCapabilities: {
            platformName: 'Android',                        // operating system
            app: 'BasicSample/app/build/outputs/apk/app-debug.apk',
            avdReadyTimeout: '25000',
            platformVersion: '6.0',
            automationName: 'Appium',
          //  deviceName: 'Android Emulator',  //  udid of the android device
          // deviceName: '05157df5448a1e21',
            appActivity: "ShowTextActivity",
            intentAction : 'android.intent.action.MAIN',
            optionalIntentArguments: '-e --es "'+ EXTRA_KEY +'" "'+EXTRA_STRING_VALUE+ '"'
        },
        logLevel: 'silent',
        // logOutput: null,
        path: '/wd/hub',
        baseUrl: null,
        coloredLogs: true,
        screenshotPath: null,
        waitforTimeout: 1000,
        waitforInterval: 250,
    },

    // - - - - SELENIUM-STANDALONE
    seleniumStandaloneOptions: {
        // check for more recent versions of selenium here:
        // http://selenium-release.storage.googleapis.com/index.html
        version: '2.53.1',
        baseURL: 'https://selenium-release.storage.googleapis.com',
        drivers: {
            chrome: {
                // check for more recent versions of chrome driver here:
                // http://chromedriver.storage.googleapis.com/index.html
                version: '2.22',
                arch: process.arch,
                baseURL: 'https://chromedriver.storage.googleapis.com'
            },
            ie: {
                // check for more recent versions of internet explorer driver here:
                // http://selenium-release.storage.googleapis.com/index.html
                version: '2.50.0',
                arch: 'ia32',
                baseURL: 'https://selenium-release.storage.googleapis.com'
            }
        }
    },

    // - - - - DEBUGGING  - - - -
    log: 'info',
    debug: false,
    seleniumDebug: null,
    debugCucumber: null,
    debugBrkCucumber: null,
    debugMocha: null,
    debugBrkMocha: null,
};