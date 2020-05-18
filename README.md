# react-native-app
React Native App displaying list of sites and site details using React Context.


## To Run
```
cd react-native-app
npx react-native start
npx react-native run-android
npx react-native run-ios

```


## To Run Tests on Android
```
open Android Emulator , Select Device , Add that device to package.json detox configurations then

detox build -c android.emu.debug
detox test -c android.emu-debug

## Note
Not Tested on iOS yet.
