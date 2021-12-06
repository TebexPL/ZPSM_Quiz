import * as React from 'react';
import {Component} from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';



class ResultsHint extends Component{

  constructor(props){
    super(props);
    this.state = {
        navigation: props.navigation
    }
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: 150,
      padding: "4%",
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      margin: '0.5%',
    },
    title:{
      flex:4,
      fontSize: 30,
    },
    button:{
      flex:3 ,
      width: 150,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      backgroundColor: 'grey',
    },
    buttonText:{
      fontSize: 25,
      color: 'white'
    }

  })

  render(){
    return (
        <View style={this.styles.container}>
            <Text style={this.styles.title}>
              Check your results
            </Text>
            <TouchableOpacity
                onPress={() => this.state.navigation.navigate('Results')} style={this.styles.button} >
              <Text style={this.styles.buttonText}>
                Check it!
              </Text>
            </TouchableOpacity>
        </View>
    )
  }
};

export default ResultsHint;
