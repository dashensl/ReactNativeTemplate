import React, { Component } from 'react';
import { } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/configStore';
import RouterWithProps from './src/appRouter';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithProps />
      </Provider>
    );
  }
}
