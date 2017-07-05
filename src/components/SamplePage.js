import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SamplePage extends Component {
    render() {
        const text = 'Hello shi ling';
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> {text}</Text>
            </View>
        );
    }
}
