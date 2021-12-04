import * as React from 'react';
import {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';





class ResultScreen extends Component{

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      color:'red',
    },

  })

  render(){
    return (
      <View style={this.styles.container} contentContainerStyle={this.styles.itemContainer}>
        <Text>
          Nothing yet
        </Text>
      </View>
    )
  }
};

export default ResultScreen;
