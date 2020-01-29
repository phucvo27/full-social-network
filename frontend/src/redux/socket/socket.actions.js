export const getSocketConnection = socket => {
    return {
        type: 'GET_SOCKET',
        socket
    }
}


export const removeSocket = ()=>{
    return {
        type: 'REMOVE_SOCKET'
    }
}