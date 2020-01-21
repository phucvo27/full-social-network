import { all, call } from 'redux-saga/effects';
import { authSaga } from './auth/auth.sagas';
import { postSaga } from './post/post.sagas';
import { userSaga } from './user/user.sagas';
import { commentSagas } from './comment/comment.sagas';

export default function* rootSagas(){
    yield all([call(authSaga), call(postSaga), call(userSaga), call(commentSagas)])
}