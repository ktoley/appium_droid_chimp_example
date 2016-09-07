cd ..\..\..\..\
rem appium --address localhost --port 4723 --avd Nexus_5_API_23_x86
rem cd %HOMEPATH%\DOCUME~1\appium_droid
rem default apk and emulator rem appium --address 127.0.0.1 --port 4723 --platform-name Android --avd Nexus_5_API_23_x86 --app BasicSample\app\build\outputs\apk\app-debug.apk
rem default device rem appium --address 127.0.0.1 --port 4723 --platform-name Android --device-name 05157df5448a1e21
rem specified device from desiredCapabilities
appium --address 127.0.0.1 --port 4723 --platform-name Android --device-name 05157df5448a1e21
