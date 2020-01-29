

export const socketReducer = (state = null, action)=>{
    switch(action.type){
        case 'GET_SOCKET':
            return action.socket;

        case 'REMOVE_SOCKET':
            return null;
        default: 
            return state;
    }
}