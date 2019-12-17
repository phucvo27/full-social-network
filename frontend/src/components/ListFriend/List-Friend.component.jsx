import React from 'react';
import { ListFriendWrapper, List, Friend, FriendState } from './List-Friend.styled';
import userAvatar from '../../assets/user-3.jpg'

class ListFriend extends React.Component {


    render(){
        return (
            <ListFriendWrapper>
                <List>
                    <Friend>
                        <img src={userAvatar} className='avatar' alt='user-avatar'/>
                        <FriendState online={true}></FriendState>
                    </Friend>
                    <Friend>
                        <img src={userAvatar} className='avatar' alt='user-avatar'/>
                        <FriendState className='state'></FriendState>
                    </Friend>
                </List>
            </ListFriendWrapper>
        )
    }
}

export default ListFriend;