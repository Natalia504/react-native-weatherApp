import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './components/common'

const CurrentWeather = ({ data, location, icon}) => {
    const { weather, temp_f, temp_c, icon_url, observation_time } = data;
    const { full } = location

    return (
        <View style={styles.viewStyle}>
            <View >
                <Text style={styles.textStyle}>Location: {full} </Text>
                <Text style={styles.textStyle}>Condition: {weather} </Text>
                <Text style={styles.textStyle}>Farenheit: {temp_f} </Text>
                <Text style={styles.textStyle}>Celsius: {temp_c} </Text>
                
            </View>
            <View>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: icon.replace(/(http)/, 'https') }} />
            </View>
            <Text style={{ fontSize: 12, margin: 5 }}>{observation_time} </Text>
        </View>
    )
}
const styles = {
    textStyle: {
        fontSize: 18,
        margin: 5,
        fontWeight: '600',
        color: 'blue'
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 50,
        width: 50
    }
}
export default CurrentWeather;