import { takeLatest, takeEvery ,all, call, put } from 'redux-saga/effects';
import {
    POST_CREATE_START,
    EDIT_POST_START,
    GET_ALL_POST_START,
    DELETE_POST_START
} from './post.types';
import { getAllPostSuccess, editPostSuccess, deletePostSuccess } from './post.actions';
import { BASE_URL } from '../../utils/Api';
import { convertArrayToObject } from '../../utils/helpers';

export function* createPost(action){
    
    try {
        console.log(action); // action is created by postCreateStart() 
        // const { } = action.payload;
        const res = yield fetch(`${BASE_URL}/posts`, {
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
        const res = yield fetch(`${BASE_URL}/posts/${uid}/all`, {
            credentials: 'include'
        })
        if(res.status === 200){
            const jsonData = yield res.json();
            const convertedData = convertArrayToObject(jsonData.data);
            yield put(getAllPostSuccess( uid, convertedData ))
        }else{
            console.log('Something went wrong')
        }
    }catch(e){
        console.log('we have an error', e.message)
    }
}
function* editPost({ payload, postID }){
    console.log(payload);
    console.log(postID)
    try{
        const res = yield fetch(`${BASE_URL}/posts/${postID}`, {
            method: 'PUT',
            credentials: 'include',
            body: payload
        });
        const jsonData = yield res.json();
        if(res.status === 200){
            yield put(editPostSuccess(jsonData.data))
        }else{
            console.log('not 200 status')
            console.log(jsonData)
        }
    }catch(e){

    }
}

function* deletePost({ postID }){
    console.log(postID)
    try{
        const res = yield fetch(`${BASE_URL}/posts/${postID}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const jsonData = yield res.json();
        if(res.status === 200){
            yield put(deletePostSuccess(jsonData.data))
        }else{
            console.log('not 200 status')
            console.log(jsonData)
        }
    }catch(e){

    }
}
export function* createPostStart(){
    yield takeLatest(POST_CREATE_START, createPost)
}

export function* editPostStart(){
    yield takeLatest(EDIT_POST_START, editPost)
}
export function* deletePostStart(){
    yield takeLatest(DELETE_POST_START, deletePost);
}
export function* getAllPostStart(){
    yield takeEvery(GET_ALL_POST_START, getAllPost)
}

// export function* addCommentToPostStart(){
//     yield takeEvery(ADD_COMMENT_TO_POST_START, addCommentToPost)
// }
export function* postSaga(){
    yield all(
        [
            call(createPostStart),
            call(getAllPostStart), 
            call(editPostStart),
            call(deletePostStart)
        ])
}