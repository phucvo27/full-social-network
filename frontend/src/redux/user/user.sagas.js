import { takeEvery, put, all, call } from 'redux-saga/effects';
import {
    getBasicUserInforSuccess
} from './user.actions'
import { BASE_URL } from '../../utils/Api'
import {
    GET_BASIC_USER_INFOR_START,
} from './user.types';

function* getBasicUserInfor({ uid }){
    try {
        const res = yield fetch(`${BASE_URL}/api/users/${uid}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        console.log(res)
        if(res.status === 200){
            const { data } = yield res.json();
            // get post of that user 
            yield put(getBasicUserInforSuccess(data.uid, data));
        }else {
            // yield put()
        }
    }catch(e){

    }
}

function* getBasicUserInforStart(){
    yield takeEvery(GET_BASIC_USER_INFOR_START, getBasicUserInfor)
}

export function* userSaga(){
    yield all([call(getBasicUserInforStart)])
}