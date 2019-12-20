import { takeLatest, takeEvery ,all, call, put } from 'redux-saga/effects';
import {
    POST_CREATE_START,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    GET_ALL_POST_START,
    GET_ALL_POST_SUCCESS
} from './post.types';
import { getAllPostSuccess } from './post.actions';

export function* createPost(action){
    
    try {
        console.log(action); // action is created by postCreateStart() 
        // const { } = action.payload;
        const res = yield fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            body: action.payload,
            credentials: 'include'
        })
        if(res.status === 200){
            console.log('create post success');
            const jsonData = yield res.json();
            console.log(jsonData)
        }
    }catch(e){

    }

}

export function* getAllPost({uid}){
    try{
        const res = yield fetch(`http://localhost:5000/api/posts/${uid}/all`, {
            credentials: 'include'
        })
        if(res.status === 200){
            const jsonData = yield res.json();
            console.log(jsonData)
            yield put(getAllPostSuccess(uid, jsonData.data ))
        }else{
            console.log('Something went wrong')
        }
    }catch(e){
        console.log('we have an error', e.message)
    }
}

export function* createPostStart(){
    yield takeLatest(POST_CREATE_START, createPost)
}

export function* getAllPostStart(){
    yield takeEvery(GET_ALL_POST_START, getAllPost)
}
export function* postSaga(){
    yield all([call(createPostStart), call(getAllPostStart)])
}