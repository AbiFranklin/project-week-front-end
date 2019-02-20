import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
      e.preventDefault();
      const post = {
        title: this.state.title,
        text: this.state.text
      }

      this.props.createPost(post);
      this.setState({ title: '', text: ''})
    }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <Form style={{width: '60%', margin: '0 auto'}} onSubmit={this.onSubmit}>
            <Form.Input value={this.state.title} onChange={this.onChange}  name='title' placeholder='Title' width={6} />
            <Form.TextArea value={this.state.text} onChange={this.onChange} name='text' placeholder='Note' width={6}/>
             <Button basic color='red' type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}


PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
