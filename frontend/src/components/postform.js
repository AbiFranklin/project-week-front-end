import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }

        this.onChange = this.onChange.bind(this);
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <Form style={{width: '60%', margin: '0 auto'}}>
            <Form.Input value={this.state.title} onChange={this.onChange}  name='title' placeholder='Title' width={6} />
            <Form.TextArea value={this.state.text} onChange={this.onChange} name='text' placeholder='Note' width={6}/>
             <Button basic color='red' type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default PostForm