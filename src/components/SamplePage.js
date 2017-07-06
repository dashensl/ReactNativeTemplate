import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SamplePage extends Component {
    render() {
        console.log(this.props);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> {this.props.text}</Text>
            </View>
        );
    }
}
