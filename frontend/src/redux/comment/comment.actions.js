import {
    ADD_COMMENT_TO_POST_START,
    ADD_COMMENT_TO_POST_SUCCESS,
    EDIT_COMMENT_START,
    EDIT_COMMENT_SUCCESS,
    REMOVE_COMMENT_FROM_POST_START,
    REMOVE_COMMENT_FROM_POST_SUCCESS
} from './comment.types'


export const addCommentToPostStart = (payload)=>{
    return {
        type: ADD_COMMENT_TO_POST_START,
        payload
    }
}

export const addCommentToPostSuccess = payload => {
    return {
        type: ADD_COMMENT_TO_POST_SUCCESS,
        postID: payload.postID,
        owner: payload.owner,
        payload
    }
}
export const editComment = payload => {
    return {
        type: EDIT_COMMENT_START,
        payload
    }
}

export const editCommentSuccess = payload => {
    return {
        type: EDIT_COMMENT_SUCCESS,
        postID: payload.postID,
        owner: payload.owner,
        payload
    }
}

export const removeCommentStart = payload => {
    // payload : {postID , commentID }
    return {
        type: REMOVE_COMMENT_FROM_POST_START,
        payload
    }
}

export const removeCommentSuccess = ({postID, commentID}) => {
    return {
        type: REMOVE_COMMENT_FROM_POST_SUCCESS,
        postID,
        commentID
    }
}