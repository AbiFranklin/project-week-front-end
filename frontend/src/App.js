import React, { Component } from 'react';
import './App.css';
import Posts from './components/posts';
import PostForm from './components/postform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
