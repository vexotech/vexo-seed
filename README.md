# vexo-seed

## Installation guide

**Pre reqs:** Having xcode version at least 13+ 

1. Create an account in [Vexo](https://vexo.co)
2. Create an app and copy the API key 
3. `cd RN66SampleApp && yarn install`
4. `yarn add @react-navigation/native @react-native-community/async-storage react-native-device-info react-native-view-shot vexo-analytics && cd ios && pod install && cd ..`
5. Add to `index.js`: 
```javascript
// Other imports
import { vexo } from 'vexo-analytics'

vexo('YOUR_API_KEY');

// Your app
// AppRegistry.registerComponent(appName, () => App);
```

6\. `yarn ios`

### In app tests 

While watching the UI on [Vexo](https://vexo.co) (remember to check out the debug panel)

1. Test all the screens of the app
2. Test that you close the app and open it again in multiple ways
3. Test that you reload the app

