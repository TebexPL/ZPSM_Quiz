import * as React from 'react';
import {Component} from 'react';
import { FlatList, RefreshControl} from 'react-native';
import TypeHint from './ResultScreenComponents/TypeHint';
import SingleResult from './ResultScreenComponents/SingleResult';




class ResultScreen extends Component{

  getResults = async () => {
    this.setState({results: [], loading:true});
    try{
      const results = await (await fetch('http://tgryl.pl/quiz/results')).json();
      const uniqueTypes = [...new Set(results.map(x => x.type))];
      let sortedResults = [];
      for(let type of uniqueTypes){
        let result = {};
        result.type = type;
        result.list = results.filter((element) => element.type == type);
        sortedResults.push(result);
      }
      this.setState({results: sortedResults, loading: false});
    }
    catch(error){
      console.error(error);
    }
  }

  constructor(props){
    super(props);
    this.state = {
      results: [],
      loading: true
    }
  }

  componentDidMount(){
    this.props.navigation.addListener('focus',() => this.getResults());
  }

  render(){
    return (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.loading}
                onRefresh={this.getResults}
              />
            }
             data={this.state.results}
             renderItem={({ item }) => (
               <FlatList
                 ListHeaderComponent={<TypeHint type={item.type} />}
                  data={item.list}
                  renderItem={({ item }) => (
                    <SingleResult result={item} />
                  )}
                  keyExtractor={item => item.id}
                />
             )}
             keyExtractor={item => item.type}
           />

    )
  }
};

export default ResultScreen;
