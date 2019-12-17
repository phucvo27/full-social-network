import { all, call } from 'redux-saga/effects';
import { userSaga } from './user/user.sagas';


export default function* rootSagas(){
    yield all([call(userSaga)])
}