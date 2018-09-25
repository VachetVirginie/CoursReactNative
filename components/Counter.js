import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, TextInput, FlatList, ScrollView } from 'react-native';
import History from '../containers/History';

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
                <Text>
                    Clicked: {this.props.counter} times
                    
                </Text>
                    <Button
                        onPress={() => this.props.actions.increment()}
                        title="+"
                        color="black"
                        accessibilityLabel="+"
                        marginTop="12"
                    />
                    <Button
                        onPress={() => this.props.actions.decrement()}
                        title="-"
                        color="black"
                        accessibilityLabel="-"
                      
                    />

                    <Button
                        onPress={() => this.props.actions.fetchRandomNumber()}
                        title="FETCH"
                        color="black"
                        accessibilityLabel="FETCH"
                       
                    />

                    <TextInput
                        value={String(this.props.inputValue)}
                        onChangeText={(text) => this.updateInput(text)}
                    />

                    <Button
                        onPress={() => this.props.actions.incrementBy(this.props.inputValue)}
                        title="+"
                        color="black"
                        borderRadius="25"
                        accessibilityLabel="+"
                      
                    />
                  
                  
                  <History/>
    

            </View>
        );
    }
}

