/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StatusBar, TextInput} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from "./components/Button";

const Stack = createNativeStackNavigator();

const InitialScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        text={'Go to input screen'}
        onPress={() => {
          navigation.navigate('InputScreen');
        }} />
      <View style={{marginTop: 50}}>
        <Button
          text={'Go to fetch screen'}
          onPress={() => {
            navigation.navigate('FetchScreen');
          }} />
      </View>
      <View style={{marginTop: 50}}>
        <Button
          isError
          text={'Go to error screen'}
          onPress={() => {
            navigation.navigate('ErrorScreen');
          }}/>
      </View>
    </View>
  );
};

const InputScreen = () => {
  const [value, setValue] = useState('');
  return (
    <View style={{flex: 1, marginTop: '50%', alignItems: 'center'}}>
      <Text style={{ margin: 10 }}>Please toggle software keyboard!</Text>
      <Text style={{ margin: 10 }}>To enable the keyboard go to the top bar menu:</Text>
      <Text style={{ fontWeight: 'bold' }}>I/O -> Keyboard -> Toggle Software Keyboard</Text>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
          width: 200,
        }}
        value={value}
        onChangeText={setValue}
      />
      <Button
        text={'Finish typing'}
        onPress={() => {
          setValue('');
        }} />
    </View>
  );
};

const FetchScreen = () => {
  const [response, setResponse] = useState(null);
  const [userId, setUserId] = useState(1);
  const [responseTime, setResponseTime] = useState(0);

  const handleOnPress = async () => {
    const start = Date.now();

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${userId}`,
      );
      const result = await response.json();

      const millis = Date.now() - start;
      setResponse(JSON.stringify(result));
      setUserId(userId + 1);
      setResponseTime(millis);
    } catch (error) {
      console.log('There has been an error while fetching json API', error)
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        text={'Call Fetch'}
        onPress={handleOnPress}
      />
      {response ? <Text style={{ width: 250, margin: 10 }}>JSON response: {response}</Text> : null}
      {responseTime ? <Text>Response time in millis: {responseTime}</Text>: null}
    </View>
  );
};

const ErrorScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        isError
        text={'Trigger Error'}
        onPress={() => {
          throw new Error('Test error');
        }}/>
    </View>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="InitialScreen"
          screenOptions={{cardStyle: {flex: 1}}}>
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
          <Stack.Screen name="InputScreen" component={InputScreen} />
          <Stack.Screen name="FetchScreen" component={FetchScreen} />
          <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
