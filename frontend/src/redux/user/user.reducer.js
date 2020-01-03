import {
    GET_BASIC_USER_INFOR_SUCCESS,
    GET_POST_OF_USER_SUCCESS
} from './user.types'
/*
    {
        uid: {uid , username, avatar, posts: []}
    }
*/

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case GET_BASIC_USER_INFOR_SUCCESS: 
            return {
                ...state,
                [action.uid] : action.payload
            }
        case GET_POST_OF_USER_SUCCESS:
            return {
                ...state,
                [action.uid]: {
                    ...state[action.uid],
                    posts: [action.payload, ...state[action.uid].posts]
                }
            }
        default:
            return state;
    }
}