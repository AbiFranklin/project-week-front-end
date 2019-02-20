import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';
import '../App.css';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

class Posts extends Component {

    componentWillMount(){
        this.props.getPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

  render() {
    const postItems = this.props.posts.map(post => (
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

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { getPosts })(Posts);