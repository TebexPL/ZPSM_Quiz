import * as React from 'react';
import {Component} from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';

class WelcomeScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      nick: ''
    }
  }

  styles = StyleSheet.create({
    container:{
       flex: 1,
       height: '100%',
       flexDirection: 'column',
       alignItems: 'center',
       backgroundColor: 'lightgrey'
    },
    headerText:{
      backgroundColor: '#f0f0f0',
      width: '100%',
      textAlign: 'center',
      paddingTop: '20%',
      fontSize: 50,
      flex: 1
    },
    infoText:{
      fontSize: 20,
    },
    confirmButton:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      width: '100%',
      marginTop: 3,
    },
    confirmText:{
      fontSize: 35
    },
    input:{
      textAlign: 'center',
      margin:'5%',
      backgroundColor: 'white',
      fontSize: 20,
      height: 50,
      width: '99%',

    },
    hint:{
      flex:2,
      backgroundColor: '#f0f0f0',
       width: '100%',
       flexDirection: 'column',
       justifyContent: 'center',
       padding: 10,
       alignItems: 'center'
     }


  })

  render(){

    return (
      <View style={this.styles.container}>
        <Text style={this.styles.headerText}>
          Welcome!
        </Text>

        <View style={this.styles.hint}>
          <Text style={this.styles.infoText}>
            Tell me your name:
          </Text>
          <TextInput style={this.styles.input} placeholder='Your nick'  onChangeText={(text) => this.setState({nick: text})} />
        </View>



        <TouchableOpacity style={this.styles.confirmButton} onPress={() => this.props.confirm(this.state.nick)}>
          <Text style={this.styles.confirmText}>
            Let's start!
          </Text>
        </TouchableOpacity>
      </View>


    )
  }
};

export default WelcomeScreen;
