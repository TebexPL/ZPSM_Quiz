import * as React from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';



class Result extends Component{


  constructor(props){
    super(props)
  }

  styles = StyleSheet.create({
    container:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor:'white'
    },
  })




  render(){

    return (
      <View style={this.styles.container}>
        <View style={{flex: 2,flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={{ fontSize: 40}}>
            Test ukończony!
          </Text>
        </View>
        <Text style={{flex:1,fontSize: 25}}>
          Twój wynik: {this.props.score}/{this.props.max}
        </Text>
      </View>
    )
  }
};

export default Result;
