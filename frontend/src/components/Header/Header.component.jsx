import React from 'react';
import getSocket from '../../utils/getSocketConnection';


class Header extends React.Component {


    componentDidMount(){
        const socket = getSocket('phuc', '12345admin');

        socket.emit('header', 'send from header component');
        socket.on('header-res',(data)=>{
            console.log('at header-res');
            console.log(data);
        })
    }

    render(){
        return (
            <div>
                <p>This is Header</p>
            </div>
        )
    }
}

export default Header;