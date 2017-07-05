import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/configStore';
import MyTabNavigator from './src/navigators/MyTabNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyTabNavigator />
      </Provider>
    );
  }
}
