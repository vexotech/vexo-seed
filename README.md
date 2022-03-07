# vexo-seed

## Installation guide

**Pre reqs:** Having xcode version at least 13+ 

1. Create an account in [Vexo](https://vexo.co)
2. Create an app and copy the API key 
3. Run `cd RN66SampleApp && yarn install`
4. Run `yarn add @react-navigation/native @react-native-community/async-storage react-native-device-info react-native-view-shot vexo-analytics && cd ios && pod install`
5. Add to `index.js`: 
```javascript
import { vexo } from 'vexo-analytics'

vexo('YOUR_API_KEY')
```


### In app 

1. Test all the screens of the app, and use the web to see the results as you please 
