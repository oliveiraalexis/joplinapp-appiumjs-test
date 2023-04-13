# Joplin app test on Android using Appium JS
### Project creation steps
- Project startup: ``` npm init -y ```
- @wdio/cli install: ```npm i @wdio/cli --save```
- Setup config: ```npx wdio config```

### Downloads
- Joplin APK: https://github.com/laurent22/joplin
- APK to get "appActivity" and "appPackage": https://m.apkpure.com/br/apk-info/com.wt.apkinfo

### Commands to run the test 

### Useful commands
- Check if the server port is in use: ``` netstat -ano|findstr "PID :4723" ```
- kill the session: ``` taskkill /pid 9100 /f ```