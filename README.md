Cable-sizing App
================

Requirements
------------

To develop this app you need following programs to be installed:

    1. Android Studio     https://developer.android.com/studio/index.html (At the bottom)
    2. Android SDK        https://developer.android.com/studio/index.html (At the bottom)
    3. NodeJS             https://docs.npmjs.com/getting-started/installing-node
    4. Java               https://java.com/ru/download/
    5. Downloaded project 

Installation
------------
    0. Java installation guide            https://www.java.com/en/download/help/download_options.xml 
    1. Android Studion installation guide https://developer.android.com/studio/install.html
    2. Android SDK installation guide (On Linux):
        2.1 Export folder where you want
        2.2 In console write vim ~/.bashrc
        2.3 Add following lines at the end of file:
            export PATH=$PATH:/PATH_TO_FOLDER/android-sdk-linux
            export PATH=$PATH:/PATH_TO_FOLDER/android-sdk-linux/android-sdk-linux/tools
            export PATH=$PATH:/PATH_TO_FOLDER/android-sdk-linux/android-sdk-linux/platform-tools
            export PATH=$PATH:/PATH_TO_FOLDER/android-sdk-linux/android-sdk-linux/build-tools
        2.4 Save
        2.5 Reset terminal
        2.6 In console wirte android. If opened android SDK manager than OK.
    3. In Android SDK manager install following components:
        3.1 Android SDK tools
        3.2 Android SDK Build-tools
        3.3 Install following packages for API 23:
            3.3.1 SDK platform
            3.3.2 Android TV ARM EABI v7a System Image
            3.3.3 ARM EABI v7a System Image
            3.3.4 Intel x86 Atom system Image
            3.3.5 Google APIs ARM EABI v7a System Image
        3.4 In tools folder install Android SDK Platform-tools

    
Project Setup
-------------

    1. Open console
    2. Go in folder where You downloaded the project (cd PATH_TO_PROJECT_FOLDER/cable-sizing)
    3. Write following commands:
        3.1 npm install
        3.2 cordova platform add android

Project Run
-----------

    1. Run Android Studio. (For Linux: In console go to Android Studio folder->Bin and write "sh studio.sh")
    2. Open tools->Android->AVD Manager->Run android virtual device.
    3. Open new console and go to project folder
    3. In console write: NODE_ENV=production webpack --config webpack.config.prod.js command to build new webpack file.
    4. In console write: cordova run android


Do not forget
-------------

    1. If you add new library using "npm" do not forget to write "--save". F.e. npm lib_name --save
    2. Fullfill this file.

     
Code tutorial
=============

Code style preferences
----------------------- 
    1. Max line of code width = 80
    2. Tab width = 2

Technologies used
=================
    
    1. ReactJS
    2. OnsenUI
    3. Cordova
    4. SQLite - https://www.npmjs.com/package/SQLite
    

