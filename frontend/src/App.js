import React from 'react';
import axios from 'axios';

import io from 'socket.io-client';

class App extends React.Component {

    async componentDidMount(){
        const res = await axios.get('/api/test');
        console.log(res.data);

        const socket = io('http://localhost:5000', {
            query: {
                token: 'uid-1234-5'
            }
        })
        socket.on('connect', ()=>{
            console.log(socket.id)
        })
    }
    render(){
        return (
            <div> 
                <p>This is Social App </p>
            </div>
        )
    }
}
export default App;
