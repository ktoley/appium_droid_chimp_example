/**
 * Created by ToleyK on 8/19/2016.
 * create default client with provide apk
 */

module.exports = {
        desiredCapabilities: {
            platformName: 'Android',                        // operating system
            app: 'BasicSample/app/build/outputs/apk/app-debug.apk',           // bundle id of the app
            appActivity: 'MainActivity',                    // app activity, which should be started
            avdReadyTimeout: '3000',
            'appiumVersion': '1.5.3',
            automationName: 'Appium',
            platformVersion: '6.0',
            deviceName: 'Android Emulator', // udid of the android device
            appActivity: "MainActivity"    // starting Activity
        },
        host: 'localhost',                                  // localhost
        port: 4723,                                          // port for appium
        debug: true
    };


/*
 desiredCapabilities: {
 var driver = require('webdriverio');
 var basePath = "BasicSample/app/build/outputs/apk/";
 var route = (typeof route === 'undefined') ? 'app-debug.apk' : route ;
 var cl = driver.remote({
 port: 4723,
 logLevel: 'silent',
 desiredCapabilities: {
 'appiumVersion': '1.5.3',
 'deviceName': 'Nexus_5_API_23_x86',
 'device-orientation': 'portrait',
 'platformVersion': '6.0',
 'platformName': 'Android',
 'app': basePath + route
 }
 }
 */