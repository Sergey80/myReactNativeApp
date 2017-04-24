# myReactNativeApp

# Motivation (feel free to skip)
Me, personally I would be happier if I could use `Scala` as language for building Native Mobile App.

And I could if was interested to create an app only for Andorid,
but that is not a case - I need both. 

In any event, with tools like `TypeScript` and `babeljs.io` and good IDE help, things are not that dramatically bad,
so it make sense to try it out.

And `JS` and `React` `JS`/`Native` by far has many features that are ready to work out of the box, with great/large community.
For now it is much closer to `real world`.
So be it.

- Q: Why not `Native Script` with `Angular` and `Typescript`?
- A: Good question. I still hope to reuse `React` way of building for the Web,
with `scalajs-react` (when day comes :) ).


# Intention
The intention is:
- to play with / try ReactNative myself, put some notes so it could be useful and reusablef or me and for others (optional)
- initially the app was created from `webstorm` template

# To install
1. install android sdk
    - Configure the ANDROID_HOME environment variable based on the location of the Android SDK. Additionally, consider adding ANDROID_HOME/tools, and ANDROID_HOME/platform-tools to your PATH.
    - make sure you have sdk at least v 6.0, by typin this command in your terminal: android list targets
    - double check with: https://www.youtube.com/watch?v=KRLLjlpy0r4&feature=iv&src_vid=mkualZPRZCs&annotation_id=video%3A60c1a849-46e5-4213-a477-665e8e31ecba
- make sure android virtual device is there
- `android avd` - to run virtual device (where our app will appear when we start it)

# To run
So far it is simple (I play with Android for now)
1. Make sure your phone simulator is on
2. Run app from IDE (advantage is to be able to debug from IDE)
3. To debug: 
  - https://blog.jetbrains.com/webstorm/2016/12/developing-mobile-apps-with-react-native-in-webstorm/
  - enable Hot Reloading: On virtual device: Ctrl + M, select "Hot Reloading", so now every time when we change some code the device will auto update the changes (no need pressing double R (RR) all the t
4. Alternative way to start, from Terminal:
 - `android avd` (runs your virtual device)
 - `react-native start` (packager)
 - `react-native run-android` (will run your app in the emulator or on real device)
 
  
# Nice tutorial to follow
1. https://www.youtube.com/watch?v=mkualZPRZCs (to start)
2. https://youtu.be/WrDwSRu8oz8?t=60 (Redux, best I could find!)

# Screen

![Sample app screen shot](doc/screen.png?raw=true "Sample app screen shot")

# Run On Real device

1. For Android on Linux
 - https://facebook.github.io/react-native/docs/running-on-device.html (official doc)
 - https://askubuntu.com/questions/461729/ubuntu-is-not-detecting-my-android-device (linux)
 - Depending on you model: try play with "Settings > Additional settings > Developer options" (like turn on Debug Mode, Turn Off optimization, etc)
 - `cd` to your app, then `react-native run-android` (be ready that on real device it could not work by some weird reason. Then try again :) )

 
# Redux (because 'our code must manage more state than ever before')
 To read: 
    - http://redux.js.org/docs/introduction/
    - https://medium.com/@bosung90/how-to-structure-your-react-native-application-using-redux-aec1677b76ca
    
 So to install redux dependencies:
 - npm install --save react-redux
 - npm install --save redux 
 - npm install --save redux-logger
 - npm install --save redux-thunk (for async calls)
 (that all will modify our package.json)
  
