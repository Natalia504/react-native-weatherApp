import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, Spinner } from './components/common'

const SevenDayWeather = ({ day, loading }) => {

    return (
        <View style={styles.viewStyle}>
                {day.map((item, i) => {
                var weekday = item.date.weekday.slice(0,3)
                if (i!==0 && i<= 6) {
                    return (
                        <View style={{ flexDirection: 'column'}} key={item.period}>
                            <Text style={styles.weekdayStyle}>{weekday}</Text>
                            <Text style={styles.textStyle}>{item.date.month}/{item.date.day}</Text>
                            {/* <Text style={styles.textStyle} adjustsFontSizeToFit={true} numberOfLines={3}>{item.conditions}</Text> */}
                            <Text style={styles.textStyle}>{item.high.fahrenheit} F</Text>
                            <Text style={styles.textStyle}>{item.high.celsius} C</Text>
                            <Image style={styles.imageStyle} source={{ uri: item.icon_url.replace(/(http)/, 'https') }} />
                        </View>
                    )
                }
            })
            }
        </View>
    )
}
const styles = {
    weekdayStyle: {
        fontSize: 20,
        fontWeight: '900',
        flexWrap: 'wrap',
        marginRight: 10,
        color: '#fff',

    },
    textStyle: {
        fontSize: 18,
        fontWeight: '700',
        flexWrap: 'wrap',
        marginRight: 15,
        color: '#fff'
    },
    viewStyle: {
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5
    },
    imageStyle: {
        height: 30,
        width: 30,
        marginBottom: 10
    }
}
export default SevenDayWeather;