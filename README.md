# Swiss Tool, An application for multiple activities
## Requirements by the class
- [X] 40 commits
- [X] ~~Webpack~~ Vite, is the same, but it was easier to setup
- [X] SCSS - Inside the .svelte files, the CSS syntax used is SASS
- [X] 100% offline
- [X] Installation is easy

## How to use
 To compile is easy:
  ```sh
  npm install
  npm run build
  npm i @capacitor/android && rm -r android && npx cap add android
  cd android && ./gradlew build
  ```
Now you have under android/app/build/outputs/apk/ your apk!

##### <b>Small note</b>
<small>Note that in the Actions tabs, the last CI Run will also have the APK to download<small>
