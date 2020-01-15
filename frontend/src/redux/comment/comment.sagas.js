import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
    addCommentToPostSuccess,
    editCommentSuccess,
    removeCommentSuccess
} from './comment.actions';
import {
    ADD_COMMENT_TO_POST_START,
    EDIT_COMMENT_START,
    REMOVE_COMMENT_FROM_POST_START
} from './comment.types';

import { BASE_URL } from '../../utils/Api';

function* addCommentToPost({ payload }){
    try{
        const { content, postID } = payload;
        const res = yield fetch(`${BASE_URL}/posts/${postID}/comments`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(content)
        })
        const jsonData = yield res.json();
        if(res.status === 200){
            yield put(addCommentToPostSuccess(jsonData.data))
        }else{

        }
    }catch(e){

    }
}

function* editComment({ payload }){
    try{
        const { content, postID, commentID } = payload;
        const res = yield fetch(`${BASE_URL}/posts/${postID}/comments/${commentID}`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(content)
        })
        const jsonData = yield res.json();
        if(res.status === 200){
            yield put(editCommentSuccess(jsonData.data))
        }else{

        }
    }catch(e){

    }
}


function* removeComment({ payload }){
    try{
        const { postID, commentID } = payload;
        const res = yield fetch(`${BASE_URL}/posts/${postID}/comments/${commentID}`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
        const jsonData = yield res.json();
        if(res.status === 200){
            const { data } = jsonData;
            yield put(removeCommentSuccess({postID: data.postID, commentID: data._id}))
        }else{

        }
    }catch(e){

    }
}
function* addCommentStart(){
    yield takeEvery(ADD_COMMENT_TO_POST_START, addCommentToPost)
}
function* editCommentStart(){
    yield takeEvery(EDIT_COMMENT_START, editComment)
}

function* removeCommentStart(){
    yield takeEvery(REMOVE_COMMENT_FROM_POST_START, removeComment)
}

export function* commentSagas(){
    yield all(
        [
            call(addCommentStart),
            call(editCommentStart),
            call(removeCommentStart)
        ]
    )
}