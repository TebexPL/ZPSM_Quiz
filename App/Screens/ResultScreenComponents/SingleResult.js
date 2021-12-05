import * as React from 'react';
import {Component} from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';



class SingleResult extends Component{

  constructor(props){
    super(props);
    this.state = {
        result: props.result
    }
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: 100,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      margin: '0.5%',
    },
    nick:{
      flex:1,
      fontSize: 20,
      margin: 10
    },
    score:{
      flex:2,
      fontSize: 20,
      margin: 10
    },
    date:{
      flex:1,
      fontSize: 15,
      margin: 10
    }


  })

  render(){
    return (
        <View style={this.styles.container}>

            <Text style={this.styles.nick}>
              {this.state.result.nick}
            </Text>
            <Text style={this.styles.score}>
              {this.state.result.score}/{this.state.result.total} punktów
            </Text>

            <Text style={this.styles.date}>
              {this.state.result.createdOn}
            </Text>
        </View>
    )
  }
};

export default SingleResult;
