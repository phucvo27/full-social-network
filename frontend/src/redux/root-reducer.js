import { combineReducers } from 'redux';
import { authReducer } from './auth/auth.reducer';
import { postReducer } from './post/post.reducer';
import { userReducer } from './user/user.reducer';
import { socketReducer } from './socket/socket.reducer';
import { commentReducer } from './comment/comment.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer,
    users: userReducer,
    comments: commentReducer,
    socket: socketReducer
})

export default persistReducer(persistConfig, rootReducer);