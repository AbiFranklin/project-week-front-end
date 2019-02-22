import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import './App.css';

import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Error from './components/Error'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path='/' component={Posts} />
        <Route path="*" component={Error} />
      </Switch>
      </div>
    );
  }
}

export default App;
