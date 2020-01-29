import {
    NOTIFICATION,
    MESSAGE,
    RECEIVE_NOTIFICATION_START,
    RECEIVE_MESSAGE_START,
    RECEIVE_MESSAGE_SUCCESS,
    RECEIVE_ADD_FRIEND_REQUEST,
    RECEIVE_FRIEND_ACCEPTED,
    RECEIVE_COMMENT,
    RECEIVE_LIKE_POST
} from './notification.types';

export const recieveMessageStart = (payload) => {
    /*
        
        payload : {
            message: 'this is content of message',
            sentTo: '',
            sentBy: '',
            created_at: Date
        }
        
    */
    return {
        type: RECEIVE_MESSAGE_START,
        payload
    }
}

export const recieveMessageSuccess = (payload) =>{
    return {
        type: RECEIVE_MESSAGE_SUCCESS,
        payload
    }
}

export const recieveNotificationStart = payload => {
    /*
        payload: {
            type: friend-request | friend-accept | liked | comment
            
        }
    */
    return {
        type: RECEIVE_NOTIFICATION_START,
        payload
    }
}

export const recieveFriendRequest = payload => {
    // {uid , avatar, username }
    return {
        type: RECEIVE_ADD_FRIEND_REQUEST,
        payload
    }
}

export const receiveFriendAccepted = payload => {
    /*
        {uid , avatar, username }
    */
    return {
        type: RECEIVE_FRIEND_ACCEPTED,
        payload
    }
}

export const recieveLikePost = payload => {
     // {  owner: { uid, avatar, username } , content, created_at}
    return {
        type: RECEIVE_LIKE_POST,
        payload
    }
}


export const recieveComment = payload => {
    // { owner: { uid, avatar, username } , content, created_at}
    return {
        type: RECEIVE_COMMENT,
        payload
    }
}