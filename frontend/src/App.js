import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './App.css';

import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Error from './components/Error'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    }

    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.postOne = this.postOne.bind(this);
    this.editOne = this.editOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
  }

  componentDidMount() {
    const API_URL = 'https://afranklin-lambdanotes.herokuapp.com/api';
    axios.get(API_URL)
    .then(posts => {
         this.setState({posts: posts.data, isLoading: false})
    });
  }

  getAll() {
    axios.get('https://afranklin-lambdanotes.herokuapp.com/api')
    .then(res => this.setState({ posts: res.data }))
    .catch(err => console.log(err))
  }

  getOne() {
    axios.get('https://afranklin-lambdanotes.herokuapp.com/api/2')
    .then(res => console.log(res.data[0]))
    .catch(err => console.log(err))
  }

  postOne(post) {
    axios.post('https://afranklin-lambdanotes.herokuapp.com/api', post)
    .then(this.forceUpdate())
  }

  editOne(id, post) {
    console.log(id, post)
    axios.put(`https://afranklin-lambdanotes.herokuapp.com/api/${id}`, post)
    .then(this.getAll())
    .catch(err => console.log(err))
  }

  deleteOne(id) {
    axios.delete(`https://afranklin-lambdanotes.herokuapp.com/api/${id}`)
    .then(posts => {
      console.log(posts)
      this.setState({posts: posts.data, isLoading: false})
 });
  }

  componentDidUpdate() {
    this.getAll()
  }




  render() {
    return (
      <div className="App">
      <Sidebar postOne={this.postOne} />
      <Switch>
        <Route exact path='/' render={() => <Posts posts={this.state.posts} deleteOne={this.deleteOne} editOne={this.editOne} />} />
        <Route path="*" component={Error} />
      </Switch>
      </div>
    );
  }
}
