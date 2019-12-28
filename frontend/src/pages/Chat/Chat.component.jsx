import React from 'react';
import { ReactComponent as Send } from '../../assets/SVG/Location.svg'
import { 
    ChatWrapper, 
    Wrapper, 
    ChatFriends, 
    ChatBox, Title, 
    ListFriends,
    Friend,
    FriendAvatar,
    FriendName,
    Status,
    ChatBody,
    ChatForm,
    MessageBox,
    MessageAvatar,
    MessageContent,
    ButtonSend
} from './Chat.styled';

import getSocketConnection from '../../utils/getSocketConnection'

import { BASE_URL } from '../../utils/Api';
class ChatPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUserChatting : {},
            message: ''
        }
    }

    componentDidMount(){
        try{
            const socket = getSocketConnection();
            socket.on('connect', ()=>{
                if(socket.connected){
                    //console.log('connect success');
                    console.log(socket.id)
                    
                }else{
                    console.log('something went wrong')
                }
            });
            
            socket.on('newFriendOnline', ({newUserid, socketID})=>{
                //console.log(newUserid, socketID)
                const isFriend = this.state.listFriend.findIndex(({_id}) => _id === newUserid);
                if(isFriend > -1){
                    //console.log('prepare to update friend status')
                    this.setState(prevState => {
                        prevState.listFriend[isFriend] = {...prevState.listFriend[isFriend], online: socketID};
                        console.log(prevState);
                        return {
                            listFriend: prevState.listFriend
                        }
                    })
                }
            })
            socket.on('newMessage', (message)=>{
                console.log(`Got message from : ${message.sentBy}`);
                this.setState(prevState => {
                    prevState.messages.push(message);
                    return{
                        messages: prevState.messages
                    }
                })

            })
        }catch(e){
            //console.log('Can not connect to socket server');
        }
        
    }

    handleChooseUserForChatting = ( user )=>{
        this.setState(() => ({currentUserChating: user}))
    }

    renderMessages = ()=>{
        const { messages, currentUserChating} = this.state;
        const { currentUser } = this.props.user
        if(messages){
            return messages.map((message, index) => {
                const isOwner = message.sentBy === currentUser.uid
                return (
                    <li className='message' key={index}>
                        <div className={`message__details ${isOwner && 'owner'}`}>
                            <div className='message__details--avatar'>
                                <img src={isOwner ? currentUser.avatar : currentUserChating.avatar} alt="message__details avatar" />
                            </div>
                            <div className='message__details--text'>
                                <h4>{isOwner ? currentUser.username : currentUserChating.username}</h4>
                                <p>{message.text}</p>
                            </div>
                        </div>
                    </li>
                )
            })
        }else{
            return <p>No Message</p>
        }
        
    }

    renderListFriend = ()=>{
        const { currentUser } = this.props.user;
        if(currentUser.friends.length > 0 ){
            return currentUser.friends.map( friend => {
                
                return (
                    <Friend className='active'>
                        <FriendAvatar src={friend.avatar} alt='user-avatar' />
                        <FriendName>{friend.username}</FriendName>
                        <Status online={friend.online ? friend.online : false} />
                    </Friend>
                )
            })
        }else{
            return <p>You have no friend...</p>
        }
    }

    handleChangeMessage = (e)=>{
        const message = e.target.value;
        this.setState(()=>({message}))
    }

    handleSendMessage = async (e)=>{
        e.preventDefault();
        const { message, currentUserChatting } = this.state;
        
        if(message.length !== 0){
            const res = await fetch(`${BASE_URL}/api/messages/${currentUserChatting.uid}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: message,
                method: 'POST'
            })
            if(res.status === 200){
                this.setState(()=>({message: ''}))
            }else{

            }
        }
    }

    render(){
        return (
            <ChatWrapper>
                <Wrapper>
                    <ChatFriends>
                        <Title>Friends</Title>
                        <ListFriends>
                            <Friend className='active'>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={true} />
                            </Friend>
                            <Friend>
                                <FriendAvatar src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <FriendName>Phuc Vo</FriendName>
                                <Status online={false} />
                            </Friend>
                        </ListFriends>
                    </ChatFriends>
                    <ChatBox>
                        <Title>Messages</Title>
                        <ChatBody>
                            <MessageBox owner={true}>
                                <MessageAvatar owner={true} src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <MessageContent owner={true}>
                                    <p>Hi, my name is Phuc</p>
                                </MessageContent>
                            </MessageBox>
                            <MessageBox owner={false}>
                                <MessageAvatar owner={false} src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar' />
                                <MessageContent owner={false}>
                                    <p>Hello, Phuc :) </p>
                                </MessageContent>
                            </MessageBox>
                        </ChatBody>
                        <ChatForm>
                            <input placeholder='Enter your message here..' type='text' name='message' onChange={this.handleChangeMessage} />
                            <ButtonSend>
                                <Send />
                            </ButtonSend>
                        </ChatForm>
                    </ChatBox>
                </Wrapper>
            </ChatWrapper>
        )
    }
}


export default ChatPage;