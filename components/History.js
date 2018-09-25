import React, { Component } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

export default class History extends Component {

  renderFlatListItem({item}){
    return(
        <Text>{String(item)}</Text>
    );
  }

  
  render() {
    return (
      <ScrollView style={{ height: 200, width:200, backgroundColor: '#aaa', left:70 , marginTop:40,}}>
        <Text
        style={{
          textAlign:"center",
         }}>Historique nb aleatoires:</Text>
        <FlatList
        
            data={this.props.history}
            renderItem={this.renderFlatListItem} 
            keyExtractor= {(item, index) => String(index)}
          />
      </ScrollView>
    );
  }
}