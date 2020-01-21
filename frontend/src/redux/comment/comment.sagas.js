import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
    getAllCommentsSuccess,
    addCommentToPostSuccess,
    editCommentSuccess,
    removeCommentSuccess
} from './comment.actions';
import {
    GET_ALL_COMMENT_START,
    ADD_COMMENT_TO_POST_START,
    EDIT_COMMENT_START,
    REMOVE_COMMENT_FROM_POST_START
} from './comment.types';

import { convertArrayToObject } from '../../utils/helpers';

import { BASE_URL } from '../../utils/Api';

function* getAllComments({ postID }){
    try{
        const res = yield fetch(`${BASE_URL}/posts/${postID}/comments`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const jsonData = yield res.json();

        if(res.status === 200){
            const convertedData = convertArrayToObject(jsonData.data);
            yield put(getAllCommentsSuccess(postID, convertedData));
        }
    }catch(e){

    }
}

function* addCommentToPost({ payload }){
    try{
        const { content, postID } = payload;
        console.log(content)
        const res = yield fetch(`${BASE_URL}/posts/${postID}/comments`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ content })
        })
        const jsonData = yield res.json();
        console.log(jsonData)
        if(res.status === 200){
            yield put(addCommentToPostSuccess(jsonData.data))
        }else{
            console.log(jsonData.data)
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
            body: JSON.stringify({ content })
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
        console.log(jsonData)
        if(res.status === 200){
            const { data } = jsonData;
            yield put(removeCommentSuccess(data))
        }else{

        }
    }catch(e){

    }
}

function* getAllCommentsStart(){
    yield takeEvery(GET_ALL_COMMENT_START, getAllComments);
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
            call(getAllCommentsStart),
            call(addCommentStart),
            call(editCommentStart),
            call(removeCommentStart)
        ]
    )
}