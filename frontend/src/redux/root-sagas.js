import { all, call } from 'redux-saga/effects';
import { userSaga } from './user/user.sagas';
import { postSaga } from './post/post.sagas';

export default function* rootSagas(){
    yield all([call(userSaga), call(postSaga)])
}