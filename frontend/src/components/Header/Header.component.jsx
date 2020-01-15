import React from 'react';
import FormInput from '../InputField/Input.component'
import { ReactComponent as Message} from '../../assets/SVG/Comment.svg';
import { ReactComponent as Notification} from '../../assets/SVG/Notification-1.svg';
import { ReactComponent as AddUser} from '../../assets/SVG/Add-User-2.svg';
import { ReactComponent as LogOut} from '../../assets/SVG/LogOut.svg';
import NotificationItem from '../NotificationItem/Notification-Item.component'
import { 
    HeaderWrapper,
    HeaderTitle,
    HeaderForm,
    HeaderInteract,
    HeaderItem,
    Dropdown,
    DropdownTitle,
    DropdownContent } from './Header.styled';
import { connect } from 'react-redux';
import defaultAvatar from '../../assets/user-1.jpg';
import { userLogOutStart } from '../../redux/auth/auth.actions';
import { withRouter } from 'react-router-dom';

class Header extends React.Component{

    handleSignOut = async ()=>{
        this.props.dispatch(userLogOutStart())
    }
    render(){
        let username;
        let avatar;
        let uid;
        if(this.props.user.currentUser){
            username = this.props.user.currentUser.username;
            avatar = this.props.user.currentUser.avatar;
            uid = this.props.user.currentUser.uid;
        }
        console.log(this.props)
        console.log(this.props.location.pathname === '/chat')
        return (
            <HeaderWrapper className='header'>
                <HeaderTitle onClick={()=>{this.props.history.push(`/`)}}>Facebook Clone</HeaderTitle>
                {
                    this.props.user.currentUser !== null 
                    &&
                    <React.Fragment>
                        <HeaderForm>
                            <FormInput 
                                type='text'
                                placeholder='Search people here'
                                width='30rem'
                            />
                        </HeaderForm>
                        <HeaderInteract>
                            {
                                this.props.location.pathname !== '/chat' && 
                                <HeaderItem onClick={()=>{this.props.history.push(`/chat`)}}>
                                    <Message fill='#fff' className='icon'/>
                                    <p className='notification'>2</p>
                                    <Dropdown>
                                        <DropdownTitle>
                                            <h4>Messages</h4>
                                        </DropdownTitle>
                                    </Dropdown>
                                </HeaderItem>
                            }
                            <HeaderItem>
                                <Notification fill='#fff' className='icon'/>
                                <p className='notification'>2</p>
                                <Dropdown>
                                    <DropdownTitle>
                                        <h4>Notification</h4>
                                        <p>X</p>
                                    </DropdownTitle>
                                    <DropdownContent>
                                        <NotificationItem avatar='https://html.crumina.net/html-olympus/img/author-main1.jpg' />
                                    </DropdownContent>
                                </Dropdown>
                            </HeaderItem>
                            <HeaderItem>
                                <AddUser fill='#fff' className='icon'/>
                                <p className='notification'>2</p>
                                <Dropdown>
                                    <DropdownTitle>
                                        <h4>Friend Requests</h4>
                                        <p>X</p>
                                    </DropdownTitle>
                                    <DropdownContent>
                                        <NotificationItem avatar='https://html.crumina.net/html-olympus/img/author-main1.jpg' />
                                    </DropdownContent>
                                </Dropdown>
                            </HeaderItem>
                            
                            <HeaderItem className='User' onClick={()=>{
                                this.props.history.push(`/user/${uid}`)
                            }}>
                                <img src= {avatar ? avatar : defaultAvatar} alt='user-avatar'/>
                                <p>{username ? username : 'Phuc Vo'}</p>
                            </HeaderItem>
                            <HeaderItem onClick={this.handleSignOut}>
                                <LogOut fill='#fff' className='icon'/>
                            </HeaderItem>
                            
                        </HeaderInteract>
                    </React.Fragment>
                }
                
                
            </HeaderWrapper>
        )
    }
    
}

const mapStateToProps = state =>{
    return {
        user: state.auth
    }
}

export default withRouter(connect(mapStateToProps)(Header));