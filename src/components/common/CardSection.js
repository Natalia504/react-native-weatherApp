import React from 'react';
import { View, Text } from 'react-native';


// Primary use is for styling
const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
}

const styles = {
  containerStyle: {
    padding: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative', 
  }
}
export { CardSection };
