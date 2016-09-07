/**
 * Created by ToleyK on 8/20/2016.
 */
var webdriverio = require('webdriverio');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.Should();
chai.use(chaiAsPromised);

var EXTRA_KEY = "com.example.android.testing.espresso.basicsample.MESSAGE";
var EXTRA_STRING_VALUE = 'test';
var options = {
    desiredCapabilities: {
        platformName: 'Android',                        // operating system
        app: 'BasicSample/app/build/outputs/apk/app-debug.apk',
        //  app: 'BasicSample/app/build/outputs/apk/app-debug-unaligned.apk',            // bundle id of the app
        //   appActivity: 'MainActivity',                    // app activity, which should be started
        avdReadyTimeout: '30000',
        automationName: 'Appium',// Selendroid udid of the android device
        deviceName: 'Nexus_5_API_23_x86',
        appActivity: ".MainActivity",
        intentAction: 'android.intent.action.MAIN',
        //optionalIntentArguments: '-e|--es <EXTRA_KEY> <EXTRA_STRING_VALUE>'
        optionalIntentArguments: '-e --es "' + EXTRA_KEY + '" "' + EXTRA_STRING_VALUE + '"'
    },
    host: 'localhost',                                  // localhost
    port: 4723,                                          // port for appium
    debug: true
};


var client = webdriverio.remote(options);
chaiAsPromised.transferPromiseness = client.transferPromiseness;

describe('Node Sample Automation Code', function () {
    this.timeout(20000);
    //call backs are required with Mocha
    before(function () {
        return client.init();

    });

    describe("Type Text in to field", function () {

        it("open-app", function () {
            "use strict";
            client.startActivity('com.example.android.testing.espresso.BasicSample',
                   '.ShowTextActivity');
           return client.currentActivity().should.eventually.equal('.ShowTextActivity');
        });

        it("test-function", function () {
            var prom = client.currentActivity();
            prom.then(function (textt) {
                "use strict";
                console.log('ooooooooo: ' + textt);
            });

         //   client.startActivity('com.example.android.testing.espresso.BasicSample',
         //       '.ShowTextActivity'
          //  );


          //  console.log(client);


            //insert your test here textToBeChanged
            //    var selector = 'new UiSelector().resourceId("com.example.android.testing.espresso.BasicSample:id/textToBeChanged")';
            var selector = 'new UiSelector().resourceIdMatches(".*\\bactivityChangeTextBtn\\b.*")';
            var promise = client.getText('android=' + selector);
            //    console.log (promise);
            console.log('selector: ' + selector);
            console.log('Selector: ' + 'new UiSelector().resourceIdMatches(".*\\b' + 'show_text_view' + '\\b.*")')
            promise.then(function (title) {
                console.log('help: ' + title);
            });

            return client
            //   .click('~Hello now')
                .getText('android=' + selector).should.eventually.equal("Open activity and change text")

        });


    });

    after(function () {
        return client.end();
    });
});