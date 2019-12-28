import io from 'socket.io-client';
import { BASE_URL } from './Api';


function memoizeSocket(){
    let socket = null;

    return function(uid){
        if(socket){
            console.log('get old socket')
            return socket;
        }else{
            socket = io.connect(`${BASE_URL}`, {
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