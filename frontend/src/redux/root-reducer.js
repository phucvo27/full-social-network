import { combineReducers } from 'redux';
import {userReducer} from './user/user.reducer';
import { postReducer } from './post/post.reducer';

export default combineReducers({
    user: userReducer,
    posts: postReducer
})