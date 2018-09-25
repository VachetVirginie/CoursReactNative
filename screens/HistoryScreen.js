import React from 'react';
import { View, Text, Button } from 'react-native';
import History from '../containers/History';

export default class HistoryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'red'}}>
        <Text>History Screen</Text>
        <History/>
        <Button
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                        title="Home"
                        color="powderblue"
                        accessibilityLabel="Home"
                       
                    />
      </View>
    );
  }
}