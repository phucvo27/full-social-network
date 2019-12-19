import { takeLatest } from 'redux-saga/effects';
import {
    POST_CREATE_START,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL
} from './post.types';


export function* createPostStart(action){
    
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

export function* postSaga(){
    yield takeLatest(POST_CREATE_START, createPostStart)
}