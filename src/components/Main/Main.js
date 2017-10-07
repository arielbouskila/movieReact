import React, { Component } from 'react';
import Search from './Search/Search'
import Results from './Results/Results'
import DataCache from '../../Service/DataCache';

function debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  
class Main extends Component {

    constructor(props) {
        super(props);
        this.cache = new DataCache();
        this.state = { searchResults: [] };
        this.showResults = debounce(this.showResults.bind(this), 1000);
      }
    
      showResults(response) {
        this.cache.Results = response;
        this.setState({
          searchResults: response
        })
      }
    
      search(searchStr) {
        var self= this;
        var searchObj = {action:'search?term',value:searchStr};
        this.cache.search(searchObj).then(function(result){
            self.showResults(result);
        });
        // let URL = 'https://itunes.apple.com/search?term=' + searchStr +'&country=us&entity=movie';
        // fetch(URL).then((response) => response.json())
        //   .then((responseData) => {
        //     this.showResults(responseData.results);
        //   });
      }

    render() {
        return (
            <div>
                <Search search={this.search.bind(this)} />
                <Results searchResults={this.state.searchResults} />
            </div>
        );
    }
}
export default Main;
