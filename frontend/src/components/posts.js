import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon } from 'semantic-ui-react';
import '../App.css'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentWillMount() {
        axios.get('http://localhost:8000/api/posts/')
        .then(res => this.setState({ posts: res.data }));
    }

    

  render() {
    const postItems = this.state.posts.map(post => (
        <div key={post.id}>
        <Card
        raised = {true}
        style = {{margin: '20px', padding: '10px'}}
        color = 'red'>
        <Card.Header>
            <h3>{post.title}</h3>
            <Icon 
            name = 'delete'
            color = 'red'
            style = {{float: 'right', position: 'absolute', top: '10px', right: '10px'}} />
        </Card.Header>
        <Card.Description>
            {post.text}
        </Card.Description>
        </Card>
        </div>
    ))

    return (
      <div>
        <h1>Posts</h1>
        <Card.Group centered = {true}>{postItems}</Card.Group>
      </div>
    )
  }
}

export default Posts;