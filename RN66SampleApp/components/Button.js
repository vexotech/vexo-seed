import React from 'react';
import {Text, TouchableOpacity} from "react-native";

export const Button = ({ text, onPress, isError }) => {
  return <TouchableOpacity
    style={{
      borderRadius: 12,
      borderWidth: 3,
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      borderColor: isError ? 'red' : 'black',
      color: isError ? 'red' : 'black'
    }}
    onPress={onPress}>
      <Text style={{ color: isError ? 'red' : 'black' }}>{text}</Text>
  </TouchableOpacity>
}
