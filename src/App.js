import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
//import Search from './components/Search/Search'
// import Results from './components/Results/Results'
import Main from './components/Main/Main';
import Movie from './components/Main/Movie/Movie';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Movie App</h2>
          <div className="App-intro">
            <BrowserRouter>
              <Switch>
                <Route exact={true} path="/" component={Main} />
                <Route path="/movie/:id" component={Movie} />
              </Switch>
          </BrowserRouter>
          </div>
        </div>
      </div>
    )

  }
}

export default App;
