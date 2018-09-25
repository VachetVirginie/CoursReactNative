import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, TextInput, FlatList, ScrollView } from 'react-native';
import History from '../containers/History';
import Homescreen from '../screens/HomeScreen';

export default class Counter extends Component {
    constructor(props)
    {
        super(props);
    }

    updateInput(text) {
        this.props.actions.updateInputValue(parseInt(text));
    }

    render() {

        return (
            <View>
                <Text style={{
       marginTop:40, textAlign:'center',
      }}>
               
                    Clicked: {this.props.counter} times
                    
                </Text>
                    <Button
                        onPress={() => this.props.actions.increment()}
                        title="+1"
                        color="powderblue"
                        accessibilityLabel="+"
                        marginTop="12"
                    />
                    <Button
                        onPress={() => this.props.actions.decrement()}
                        title="-1"
                        color="skyblue"
                        accessibilityLabel="-"
                      
                    />

                    <Button
                        onPress={() => this.props.actions.fetchRandomNumber()}
                        title="Nb aleatoire"
                        color="steelblue"
                        accessibilityLabel="FETCH"
                       
                    />

                    <TextInput
                        value={String(this.props.inputValue)}
                        onChangeText={(text) => this.updateInput(text)}
                    />

                    <Button
                        onPress={() => this.props.actions.incrementBy(this.props.inputValue)}
                        title="Total"
                        color="black"
                        borderRadius="25"
                        accessibilityLabel="+"
                      
                    />
            </View>
        );
    }
}

