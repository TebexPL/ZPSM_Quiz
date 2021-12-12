import * as React from 'react';
import {Component} from 'react';
import { FlatList, RefreshControl } from 'react-native';
import TestCard from './MainScreenComponents/TestCard';
import ResultsHint from './MainScreenComponents/ResultsHint';



class MainScreen extends Component{



  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.refreshCallback();
  }

  renderItem = ({ item }) => (
      <TestCard test={item} navigation={this.props.navigation} />
  );


  render(){
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={this.props.loading}
            onRefresh={this.props.refreshCallback}
          />
        }
         ListHeaderComponent={<ResultsHint navigation={this.props.navigation}/>}
         data={this.props.tests}
         renderItem={this.renderItem}
         keyExtractor={item => item.id}
       />

    )
  }
};

export default MainScreen;
