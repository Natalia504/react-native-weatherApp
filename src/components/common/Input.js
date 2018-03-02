import React from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button } from '../common';

const Input = ({ label, value, onChangeText, placeholder, getCurrentLocation }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
      <Button onPress={getCurrentLocation}>
        <Text>Click</Text>
      </Button>
    </View>
  )
}
const styles = {
  inputStyle: {
    color: '#000009',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 16,
    color: "#007aff",
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    opacity: 0.6
  }
}

export { Input };
