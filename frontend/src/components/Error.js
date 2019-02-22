import React, { Component } from 'react';
import { Message, Icon } from 'semantic-ui-react'
import './posts.css';

export default class Error extends Component {
  render() {
    return (
      <div className='posts'>
        <Message icon className='message' size="massive">
            <Icon name='bug' color="red" />
            <Message.Content>
            <Message.Header>Oh No!</Message.Header>
            Page not found.
            </Message.Content>
        </Message>
      </div>
    )
  }
}
