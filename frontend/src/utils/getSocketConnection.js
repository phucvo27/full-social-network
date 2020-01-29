import io from 'socket.io-client';
//import { BASE_URL } from './Api';


function memoizeSocket(){
    let socket = null;

    return function(uid){
        if(socket){
            console.log('get old socket')
            return socket;
        }else{
            console.log('get new socket connection')
            socket = io.connect(`http://localhost:5000`, {
                query:{
                    uid
                }
            });
            return socket
        }

    }
}

const getConnection = memoizeSocket();

export default getConnection;
