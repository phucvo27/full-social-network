import React from 'react';
import {
    Wrapper,
    AvatarNotification,
    Content,
    ChoosenButtons
} from './FriendRequest.styled'
import { connect } from 'react-redux';

class FriendRequest extends React.Component{

    handleChoosen = (type)=>{
        if(type === 'accept'){

        }else if(type === 'deny'){

        }
    }
    render(){
        return (
            <Wrapper>
                <AvatarNotification src={owner.avatar} alt='user-avatar' />
                <Content>
                    <h5>{owner.username} is sent you a friend request</h5>
                    <ChoosenButtons>
                        <button onClick={()=>this.handleChoosen('accept')}>Accept</button>
                        <button onClick={()=>this.handleChoosen('deny')}>Deny</button>
                    </ChoosenButtons>
                </Content>
            </Wrapper>
        )
    }
    
}

export default connect()(FriendRequest);