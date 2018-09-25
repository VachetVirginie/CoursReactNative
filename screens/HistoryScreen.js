import React from 'react';
import { View, Text} from 'react-native';
import History from '../containers/History';
import { Button } from 'react-native-elements';


export default class HistoryScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title="Home"
                        color="powderblue"
                        accessibilityLabel="Home"
                       
                    />
        <Text>History Screen</Text>
        <History/>
       
      </View>
    );
  }
}