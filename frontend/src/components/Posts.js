import React, { Component } from 'react';
import { Message, Icon, Card, Divider } from 'semantic-ui-react'
import './posts.css';


export default class Posts extends Component {
    

  render() {
    return (
        <div className="posts">
            { this.props.isLoading ? 
            <Message icon className='message' size="massive">
                <Icon name='circle notched' loading />
                <Message.Content>
                <Message.Header>Just one second</Message.Header>
                We are fetching that content for you.
                </Message.Content>
            </Message> : 
                <div className='notes'>
                <Card.Group className="card-group" >
                {this.props.posts.map(post => {
                    return (<Card color="red" key={post.id} >
                        <Card.Header className="card-header">
                        <h2>{post.title}</h2>
                        <Icon onClick={(e) => this.delHandler(post.id)} name='delete' color="red" />
                        </Card.Header>
                        <Divider />
                        <Card.Description className="card-text" >{post.text}</Card.Description>
                        </Card>)})}
                    </Card.Group></div>
                    }
        </div>
                    
    )
  }
}
