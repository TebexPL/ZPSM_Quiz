import * as React from 'react';
import {Component} from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';



class LoadingHint extends Component{

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
      padding: "4%",
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      margin: '0.5%',
    },
    title:{
      flex:1,
      fontSize: 30,
    },

  })

  render(){
    return (
        <View style={this.styles.container}>
            <Text style={this.styles.title}>
              Loading...
            </Text>

        </View>
    )
  }
};

export default LoadingHint;
