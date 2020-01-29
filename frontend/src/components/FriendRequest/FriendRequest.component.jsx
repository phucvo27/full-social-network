import React from 'react';
import {
    Wrapper,
    AvatarNotification,
    Content,
    ChoosenButtons
} from './FriendRequest.styled'

const FriendRequest = ({ owner })=>{
    return (
        <Wrapper>
            <AvatarNotification src={owner.avatar} alt='user-avatar' />
            <Content>
                <h5>{owner.username} is sent you a friend request</h5>
                <ChoosenButtons>
                    <button>Accept</button>
                    <button>Deny</button>
                </ChoosenButtons>
            </Content>
        </Wrapper>
    )
}

export default FriendRequest;