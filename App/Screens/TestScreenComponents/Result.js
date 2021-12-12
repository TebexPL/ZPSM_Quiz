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
    score: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    button:{
      height: '40%',
      backgroundColor: 'lightgrey',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 5
    }

  })




  render(){

    return (
      <View style={this.styles.container}>
        <View style={this.styles.score}>
          <Text style={{ fontSize: 40}}>
            Test ukończony!
          </Text>
        </View>
        <Text style={{flex:1,fontSize: 25}}>
          Twój wynik: {this.props.score}/{this.props.max}
        </Text>
        <View style={{flex:1, width:'80%'}}>
          <TouchableOpacity
            style={this.styles.button}
            onPress={this.props.gotoResults}>

            <Text style={{fontSize: 30, fontFamily: 'SairaCondensed-Medium'}}>Check scoreboard</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
};

export default Result;
