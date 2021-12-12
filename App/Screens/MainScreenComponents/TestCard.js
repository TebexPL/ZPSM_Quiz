import * as React from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



class TestCard extends Component{

  constructor(props){
    super(props);
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: 200,
      padding: "5%",
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      margin: '0.5%',

    },
    tagsContainer:{
      flexDirection: 'row',
    },
    name:{
      fontSize: 30,
      marginBottom:15
    },
    description:{
      marginTop: 10
    },
    tag:{
      marginRight: 5,
      color: 'teal',
      textDecorationLine: 'underline'
    }

  })

  render(){
    return (
        <TouchableOpacity style={this.styles.container} onPress={() => this.props.navigation.navigate(this.props.test.name)}>
            <Text style={this.styles.name}>
              {this.props.test.name}
            </Text>
            <View style={this.styles.tagsContainer}>
              {this.props.test.tags.map((tag, tagKey) =>
                <Text key={tagKey} style={this.styles.tag}>
                  #{tag}
                </Text>
              )}
            </View>
            <Text style={this.styles.description}>
              {this.props.test.description}
            </Text>
        </TouchableOpacity>
    )
  }
};

export default TestCard;
