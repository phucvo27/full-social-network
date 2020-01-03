import { takeEvery, call, all, put } from 'redux-saga/effects';
import { RECEIVE_MESSAGE_START, RECEIVE_NOTIFICATION_START } from './notification.types';
import { recieveMessageSuccess, recieveFriendRequest, recieveComment, recieveLikePost, receiveFriendAccteped } from './notification.actions';
import { flashMessage } from '../flashMessage/flash-message.actions'

function* receiveMessage({ payload }){
    yield put(recieveMessageSuccess(payload))
}

function* receiveNotification({ payload }){
    const type = payload.type;
    let flashMessageContent;

    if(type === 'friend-request'){
        yield put(recieveFriendRequest(payload))
    }
    else if(type === 'friend-accept'){
        flashMessageContent = {
            owner: payload.owner,
            type
        }
        yield put(receiveFriendAccteped(payload))
    }
    else if(type === 'liked'){
        flashMessageContent = {
            owner: payload.owner,
            type
        }
        yield put(recieveLikePost(payload))
    }
    else if(type === 'comment'){
        flashMessageContent = {
            owner: payload.owner,
            type
        }
        yield put(recieveComment(payload))
    }
    if(flashMessageContent){
        yield put(flashMessage(flashMessageContent))
    }
}

// listen notification

function* receiveNotificationStart(){
    yield takeEvery(RECEIVE_NOTIFICATION_START, receiveNotification)
}

// listen message

function* receiveMessageStart(){
    yield takeEvery(RECEIVE_MESSAGE_START, receiveMessage);
}

export function* rootNotification(){
    yield all([call(receiveMessageStart), call(receiveNotificationStart)])
}