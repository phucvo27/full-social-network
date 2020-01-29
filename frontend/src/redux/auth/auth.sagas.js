import { takeLatest, put, call, all } from 'redux-saga/effects';
import { USER_LOGIN_START, USER_LOGOUT_START } from './auth.types';
import { userLoginSuccess, userLoginFail, userLogOutSuccess } from './auth.actions';
import { getSocketConnection } from '../socket/socket.actions';
import getSocket from '../../utils/getSocketConnection';
// Watcher


export function* logOut(){
    const res = yield fetch('http://localhost:5000/api/auth/logout', {
        credentials:'include'
    });
    console.log(res.status);
    if(res.status === 200){
        yield put(userLogOutSuccess())
    }
}

export function* signInWithEmail(action){
    console.log(action);
    const { email , password } = action.payload;
    try{
        const res = yield fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                email,
                password
            }),
            credentials: 'include'
        })
        if(res.status === 200){
            const jsonData = yield res.json();
            yield put(
                userLoginSuccess(jsonData.data.user)
            )
            const { uid } = jsonData.data.user;
            const socket = getSocket(uid);
            socket.on('connect', ()=>{
                console.log(socket.connected);
                console.log(socket.id);
                yield put(getSocketConnection(socket))
            })
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
    yield takeLatest( USER_LOGOUT_START, logOut)
}

export function* signInStart(){
    yield takeLatest(USER_LOGIN_START, signInWithEmail)
}

export function* authSaga(){
    //yield all([ call(signInStart)])
    yield all([ call(signInStart), call(logOutStart)])
}