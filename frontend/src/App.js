import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'

import './App.css';

import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Error from './components/Error'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      posts: []
   }
   this.delHandler = this.delHandler.bind(this);
   this.addPost = this.addPost.bind(this);
  }


componentDidMount() {
  const API_URL = 'https://afranklin-lambdanotes.herokuapp.com/api';
  axios.get(API_URL)
  .then(posts => {
       this.setState({posts: posts.data, isLoading: false})
  });
}

delHandler(id) {
  axios.delete(`https://afranklin-lambdanotes.herokuapp.com/api/${id}`)
  .then(res => {
      console.log(res)
  })
}

addPost(post) {
  const API_URL = 'https://afranklin-lambdanotes.herokuapp.com/api';
  axios.post(API_URL, post)
  .then(res => {
    axios.get(API_URL)
    .then(posts => {
      this.setState({posts: posts.data, isLoading: false})
    })
  })
}

  render() {
    return (
      <div className="App">
      <Sidebar addPost={this.addPost} />
      <Switch>
        <Route exact path='/' render={() => <Posts posts={this.state.posts} deletePost={this.delHandler}/>} />
        <Route path="*" component={Error} />
      </Switch>
      </div>
    );
  }
}

export default App;
