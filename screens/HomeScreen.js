import React from 'react';
import { View, Text} from 'react-native';
import Counter from '../containers/Counter';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{  alignItems: 'center', justifyContent: 'center'}}>
      <Button
                        onPress={() => this.props.navigation.navigate('History')}
                        title="History"
                        color="powderblue"
                        accessibilityLabel="History"
                       
                    />
        <Text>Home Screen</Text>
        <Counter/>
        
       
      
      </View>
    );
  }
}
