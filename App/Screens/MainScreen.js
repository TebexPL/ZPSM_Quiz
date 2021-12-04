import * as React from 'react';
import {Component} from 'react';
import { Button, ScrollView, Text, StyleSheet } from 'react-native';
import TestCard from './MainScreenComponents/TestCard';
import ResultsHint from './MainScreenComponents/ResultsHint';




class MainScreen extends Component{

  constructor(props){
    super(props);



    this.state = {
        cards: props.cards,
        navigation: props.navigation
    }
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 5,
      backgroundColor: '#D5D5D5',
    },
    itemContainer: {
      alignItems: 'center',
    }

  })

  render(){
    return (
      <ScrollView style={this.styles.container} contentContainerStyle={this.styles.itemContainer}>
            <ResultsHint navigation={this.state.navigation}/>

        {this.state.cards.map((card, key) =>
          <TestCard key={key} title={card.title} tags={card.tags} text={card.text}/>
        )}


      </ScrollView>
    )
  }
};

export default MainScreen;
