# Basic sample for Appium + Chimp.js + Mocha+Chai
This test harness uses node.js appium and chimp. You don't need an IDE to build and execute it but Android Studio is recommended as it installs the Android SDK, Java, and the Emulator. 

Everything related to Chimp Testing testing is in `BasicSample/app/regression-test` the root for the test harness.  The package.json is located in regression-test and you should run npm install on the command line from the path to regression-test populate node_modules.

`.scripts`  contains several .bat files to start the tests.
1.  Start the Appium Server
`appium_*.bat` start the Appium server with a target emulator or device.  This requires the Specified Emulator be installed or device conncted.
2. Start Chimp.js
`chimp_*.bat`
If you are testing with emulator run with the chimp config targeting the emulator.  If you are testing the device run with the chimp config which targets the device.
You can also run each of these scripts from the command line.

The tests currently target the `Nexus_5_API_23_x86` emulator.
To change this you first need to update the target emulator in the appium bat file.