import {
    POST_CREATE_START,
    POST_CREATE_SUCCESS
} from './post.types'

const INIT_STATE = {
    posts: []
}

export default postReducer = (state = INIT_STATE, action)=>{
    switch(action.type){
        case POST_CREATE_SUCCESS:
            return {
                ...state,
                posts: [...state, action.payload]
            }
        
        default:
            return state;
    }
}