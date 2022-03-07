/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StatusBar, TouchableOpacity, TextInput} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const InitialScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          borderRadius: 12,
          borderWidth: 3,
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10
        }}
        onPress={() => {
          navigation.navigate('InputScreen');
        }}>
        <Text>Go to input screen</Text>
      </TouchableOpacity>
      <View style={{marginTop: 50}}>
        <TouchableOpacity
          style={{
            borderRadius: 12,
            borderWidth: 3,
            width: 150,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10
          }}
          onPress={() => {
            navigation.navigate('FetchScreen');
          }}>
          <Text>Go to fetch screen</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 50}}>
        <TouchableOpacity
          style={{
            borderRadius: 12,
            borderWidth: 3,
            borderColor: 'red',
            width: 150,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10
          }}
          onPress={() => {
            navigation.navigate('ErrorScreen');
          }}>
          <Text style={{color: 'red'}}>Go to error screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const InputScreen = () => {
  const [value, setValue] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Type something...</Text>
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
    </View>
  );
};

const FetchScreen = () => {
  const [response, setResponse] = useState(null);
  const [userId, setUserId] = useState(1);
  const [responseTime, setResponseTime] = useState(0);

  const handleOnPress = async () => {
    const start = Date.now();

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${userId}`,
    );
    const result = await response.json();

    const millis = Date.now() - start;
    setResponse(JSON.stringify(result));
    setUserId(userId + 1);
    setResponseTime(millis);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          borderRadius: 12,
          borderWidth: 3,
          width: 100,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10
        }}
        onPress={handleOnPress}
      >
        <Text>Call Fetch</Text>
      </TouchableOpacity>
      {response ? <Text style={{ width: 250, margin: 10 }}>JSON response: {response}</Text> : null}
      {responseTime ? <Text>Response time in millis: {responseTime}</Text>: null}
    </View>
  );
};

const ErrorScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          throw new Error('Test error');
        }}>
        <Text>Trigger Error</Text>
      </TouchableOpacity>
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
