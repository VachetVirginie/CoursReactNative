import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './store';
import { Provider, connect } from 'react-redux';
import Counter from "./containers/Counter";


export default class App extends React.Component {

    render() {
      return (
          <Provider store={store}>
                  <Counter />
                  
          </Provider>
      );
  }
}