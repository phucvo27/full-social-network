import React from 'react';
import axios from 'axios';
import Header from './components/Header/Header.component'
import getSocket from './utils/getSocketConnection';

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            login: false
        }
    }

    async componentDidMount(){
        const res = await axios.get('/api/test');
        console.log(res.data);
        console.log('componentDidMount')
        // const socket = io('http://localhost:5000', {
        //     query: {
        //         token: 'uid-1234-5'
        //     }
        // })
        const socket = getSocket('phuc', '12345admin');
        socket.on('connect', ()=>{
            console.log(socket.id)
        });
        socket.on('login-succes', (data)=>{
            console.log('new emit message')
            console.log(data)
        })
    }

    testing = ()=>{
        
        const socket = getSocket('phuc', '12345admin');
        socket.emit('push-login', 'login from client');
        this.setState(prevState => ({login: !prevState.login}));

    }
    render(){
        console.log(this.state.login)
        return (
            <div> 
                <Header />
                <p>This is Social App </p>
                <button onClick={this.testing}>Update state</button>
            </div>
        )
    }
}
export default App;
