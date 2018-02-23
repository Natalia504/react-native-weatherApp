import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import { Header, Button, Spinner, Card, CardSection, Input } from './components/common';
import CurrentWeather from './CurrentWeather';
import moment from 'moment';
import backgroundPic from './Assets/andrew-haimerl-478640-unsplash.jpg'

// this line is to get rid of the annoying yellow box warning.
console.ignoredYellowBox = ['Remote debugger'];

class App extends Component {
    state = {
        userInput: '',
        data: {},
        location: {},
        icon: '',
        error: '',
        loading: false
    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    getWeather() {
        axios.get(`https://api.wunderground.com/api/17702fa3e4783439/conditions/q/${this.state.userInput}.json`)
            .then(res =>
                this.setState({
                    data: res.data.current_observation,
                    location: res.data.current_observation.display_location,
                    icon: res.data.current_observation.icon_url
                })
            );
    }



    render() {
        var now = moment(new Date()).format('LLLL');
        var resizeMode = 'contain'
        return (
            <View >
                <Image style={{flex:1, resizeMode}} source={backgroundPic}/>
                <Card>
                    <Header headerText={'Natalia\'s Weather App'} />
                    <CardSection>
                        <Text style={styles.dateStyle}>{now}</Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            placeholder='Denver, CO or 80123'
                            label='Location'
                            value={this.state.userInput}
                            onChangeText={(val) => this.handleChange(val)}
                        />
                    </CardSection>

                    <CardSection>
                        <Button onPress={() => this.getWeather()}> Get Weather </Button>
                    </CardSection>

                    <CardSection>
                        <CurrentWeather
                            data={this.state.data}
                            location={this.state.location}
                            icon={this.state.icon}
                        />
                    </CardSection>

                </Card>
            </View>
        );
    }
}
const styles={
    dateStyle: {
        height: 30, 
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center', 
        color: 'blue'
    }
}
export default App;