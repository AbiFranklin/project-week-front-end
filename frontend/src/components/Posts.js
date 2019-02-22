import React, { Component } from 'react';
import { Message, Icon, Card, Divider } from 'semantic-ui-react'
import './posts.css';
import { Link } from 'react-router-dom';

export default class Posts extends Component {
    state = {
        isLoading: true,
        posts: []
    }

    componentDidMount() {
       const API_URL = 'https://afranklin-lambdanotes.herokuapp.com/api';
       fetch(API_URL)
       .then(res => res.json())
       .then(posts => {
            this.setState({posts, isLoading: false})
       });
    }


  render() {
      const cards =    this.state.posts.map(post => {
        return (<Card color="red" key={post.id} >
                <Card.Header className="card-header">
                <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
                <Icon name='delete' color="red" />
                </Card.Header>
                <Divider />
                <Card.Description className="card-text" >{post.text}</Card.Description>
                </Card>)
        })

    return (
        <div className="notes">
            { this.state.isLoading ? 
            <Message icon className='message' size="massive">
                <Icon name='circle notched' loading />
                <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are fetching that content for you.
                </Message.Content>
            </Message> : 
            <Card.Group className="card-group" >
                {cards}
            </Card.Group>
            }
        </div>        
    )
  }
}
