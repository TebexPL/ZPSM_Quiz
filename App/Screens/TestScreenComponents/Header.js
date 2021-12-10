import * as React from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';



class Header extends Component{

  constructor(props){
    super(props);
  }

  styles = StyleSheet.create({
    container:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',

    },
    header:{
      flex:3,
      alignItems: 'center',
      padding: '5%',
      width: '100%',
      backgroundColor: 'white'
    },
    testName:{
      fontSize: 30,
      marginBottom: 20
    },
    question: {
      textAlign: 'center',
      fontSize: 25,
      marginTop: 20
    },
    progressBar:{
      width: '80%'
    }

  })




  render(){

    return (
      <View style={this.styles.header}>
        <Text style={this.styles.testName}>
          Question {this.props.taskNumber}/{this.props.tasksLength}
        </Text>
        <Progress.Bar progress={this.props.time/this.props.task.duration} color='grey'/>
        <Text style={this.styles.question}>
            {this.props.task.question}
        </Text>
      </View>
    )
  }
};

export default Header;
