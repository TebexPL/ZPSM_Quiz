import * as React from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';



class SingleResult extends Component{

  constructor(props){
    super(props);
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
      margin: 10,
      fontFamily: 'SairaCondensed-Medium'
    },
    score:{
      flex:1,
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
              {this.props.result.nick}
            </Text>
            <Text style={this.styles.score}>
              {this.props.result.score}/{this.props.result.total} punktów
            </Text>
            <Text style={this.styles.date}>
              {this.props.result.createdOn}
            </Text>
        </View>
    )
  }
};

export default SingleResult;
