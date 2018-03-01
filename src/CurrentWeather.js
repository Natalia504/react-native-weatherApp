import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, Spinner } from './components/common'

const CurrentWeather = ({ data, location, icon, error, now, today, loading }) => {
    const { weather, temp_f, temp_c, icon_url } = data;
    const { full } = location

    return (

        <View style={styles.viewStyle}>
            {loading ?
                <Spinner size='small' />
                : weather ?
                <View>

                    <Text style={styles.dateStyle}>{today}, {now}</Text>
                    <Text style={styles.locationStyle}> {full} </Text>
                    <Text style={styles.textStyle}> {weather} </Text>
                    <Text style={styles.textStyle}> {temp_f} F </Text>
                    <Text style={styles.textStyle}> {temp_c} C </Text>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: icon.replace(/(http)/, 'https') }} />

                </View> 
                : null}
        </View>
    )
}
const styles = {
    dateStyle: {
        marginBottom: 5,
        fontSize: 20,
        height: 25,
        fontWeight: '900',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#E8E1E6'
    },
    locationStyle: {
        fontSize: 24,
        textDecorationLine: 'underline',
        fontWeight: '900',
        color: '#E0E0E0',
    },
    textStyle: {
        fontSize: 22,
        margin: 3,
        fontWeight: '800',
        color: '#fff',
        lineHeight: 22
    },
    viewStyle: {
        minWidth: 300,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 50,
        width: 50
    }
}
export default CurrentWeather;