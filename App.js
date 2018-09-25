import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './store';
import { Provider, connect } from 'react-redux';
import Navigator from "./navigation/Navigator";



export default class App extends React.Component {

    render() {
      return (
          <Provider store={store}>
            <Navigator />
          </Provider>
      );

      
  }
}

