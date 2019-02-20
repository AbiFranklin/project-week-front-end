import { GET_POSTS, NEW_POST } from './types';
import axios from 'axios';

export function getPosts() {
    return function(dispatch) {
        axios.get('http://localhost:8000/api/posts/')
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }));
    }
}

export function createPost(post) {
    return function(dispatch) {
        axios.post('http://localhost:8000/api/posts/', { title: post.title, text: post.text })
        .then(res => dispatch({
            type: NEW_POST,
            payload: post
        }));
    }
}