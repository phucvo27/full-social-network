import { takeLatest, put, call, all } from 'redux-saga/effects';
import { USER_LOGIN_START, USER_LOGOUT, USER_LOGOUT_FAIL } from './user.types';
import { userLoginSuccess, userLoginFail, userLogOut } from './user.actions';
import axios from 'axios';


// Watcher


export function* logOut(){
    try{
        const res = yield axios.get('http://localhost:5000/api/auth/logout');
        if(res.status === 200){
            yield put(
                userLogOut()
            )
        }else{
            yield put({type: USER_LOGOUT_FAIL})
        }
    }catch(e){
        yield put({type: USER_LOGOUT_FAIL})
    }
}

export function* signInWithEmail(action){
    console.log(action);
    const { email , password } = action.payload;
    try{
        const res = yield axios(
            {
                method: 'post',
                url: 'http://localhost:5000/api/auth/login',
                data: {
                    email,
                    password
                },
                withCredentials: true
            }
        );

        console.log(res)
        if(res.status === 200){
            yield put(
                userLoginSuccess(res.data.data.user)
            )
        }else{
            throw Error(res.data.message);
        }
    }catch(e){
        yield put(
            userLoginFail({error: e.message})
        )
    }
}

export function* logOutStart(){
    yield takeLatest( USER_LOGOUT, logOut)
}

export function* signInStart(){
    yield takeLatest(USER_LOGIN_START, signInWithEmail)
}

export function* userSaga(){
    yield all([ call(signInStart), call(logOutStart)])
}