import { combineReducers } from 'redux';
import postReducer from './postreduce'

export default combineReducers({
    posts: postReducer
});