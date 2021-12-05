import * as React from 'react';
import {Component} from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import SingleResult from './SingleResult';
import TypeHint from './TypeHint';


class ResultTable extends Component{

  constructor(props){
    super(props);
    this.state = {
      results: props.results
    }
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D5D5D5',
    },
    categoryContainer: {
      flex: 1,
      width: '100%',
      margin: 0

    }

  })

  render(){
    const types = this.state.results.map(x => x.type);
    const uniqueTypes = [...new Set(types)];
    return (
        <View style={this.styles.container}>
          {uniqueTypes.map((type, key) =>
            <View style={this.styles.categoryContainer} key={key}>
              <TypeHint type={type} key={key} />
              {this.state.results.filter((element) => element.type == type)
                .map((result, key) =>
                  <SingleResult result={result} key={key} />
                )
              }
            </View>

          )}
        </View>
    )
  }
};

export default ResultTable;
