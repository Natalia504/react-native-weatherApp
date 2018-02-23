import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './components/common'

const CurrentWeather = ({ data, location, icon}) => {
    const { weather, temp_f, temp_c, icon_url, observation_time } = data;
    const { full } = location
    console.log('Icon', icon)

    return (
        <View style={styles.viewStyle}>
        { weather ? (
            <View >
                <Text style={styles.locationStyle}> {full} </Text>
                <Text style={styles.textStyle}>Condition: {weather} </Text>
                <Text style={styles.textStyle}>Farenheit: {temp_f} </Text>
                <Text style={styles.textStyle}>Celsius: {temp_c} </Text>
            </View>)
            : null }
            <View>
        { icon? (
                <Image
                    style={styles.imageStyle}
                    source={{ uri: icon.replace(/(http)/, 'https') }} />
                ): null}   
            </View>
            {/* <Text style={{ fontSize: 10 }}>{observation_time} </Text> */}
        </View>
    )
}
const styles = {
    locationStyle:{
        fontSize: 20,
        fontWeight: '900', 
        color: 'blue'
    },
    textStyle: {
        fontSize: 16,
        margin: 5,
        fontWeight: '600',
        color: 'blue'
    },
    viewStyle: {
        height: 400,
        flex: 1,
        justifyContent: 'flex-start',
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