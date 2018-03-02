import React from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button, Spinner } from '../common';
import FontAwesome, { Icons } from 'react-native-fontawesome';

// FontAwesome error: Unrecognizable fontFamily "fontAwesome"
// To Solve:  npm install react-native-vector-icons --save
// react-native link react-native-vector-icons
// and then restart: react-native run-ios

const Input = ({ label, value, onChangeText, placeholder, getCurrentLocation }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  console.log('VAlue', value)

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
       <TouchableOpacity onPress={getCurrentLocation}>
        <Text style={{margin: 20, fontSize: 25, textAlign: 'left'}}>       
          <FontAwesome>{Icons.locationArrow}</FontAwesome>
        </Text>
      </TouchableOpacity>
      {/* : <Spinner size='small'/>} */}
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
