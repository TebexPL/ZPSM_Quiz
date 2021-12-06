import * as React from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';



class TypeHint extends Component{

  constructor(props){
    super(props);
    this.state = {
      type: props.type
    }

  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: 70,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
    },
    title:{
      fontSize: 30,
      color: 'white',
    },

  })

  render(){
    return (
        <View style={this.styles.container}>
            <Text style={this.styles.title}>
              {this.state.type}
            </Text>
        </View>
    )
  }
};

export default TypeHint;
