import React from 'react';
import { View, Text, Button} from 'react-native';
import Counter from '../containers/Counter';



export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{  alignItems: 'center', justifyContent: 'center', backgroundColor:'red'}}>
        <Text>Home Screen</Text>
        <Counter/>
        <Button
                        onPress={() => this.props.navigation.navigate('History')}
                        title="History"
                        color="powderblue"
                        accessibilityLabel="History"
                       
                    />
       
      
      </View>
    );
  }
}
