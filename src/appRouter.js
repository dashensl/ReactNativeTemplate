import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as actions from './actions/sampleAction';


class RouterWithProps extends Component {
  onPress() {
    // this.props.setBaseURL({ data: 'shit' });
    const map1 = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set('a', 2);
    console.log(map1, map2);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Open up App.js to start working on your app! chihi</Text>
        <Text>Changes you mrake will automatically reload.</Text>
        <Text>Shake your phone to open the develope menu.</Text>
        <Button title="Learn More" onPress={this.onPress.bind(this)} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  sample: state.sample
});

export default connect(mapStateToProps, actions)(RouterWithProps);
