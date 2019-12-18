import React from 'react';
import FormInput from '../InputField/Input.component'
import { ReactComponent as Message} from '../../assets/SVG/Comment.svg';
import { ReactComponent as Notification} from '../../assets/SVG/Notification-1.svg';
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
import { userLogOutStart } from '../../redux/user/user.actions'

class Header extends React.Component{

    handleSignOut = async ()=>{
        this.props.dispatch(userLogOutStart())
    }
    render(){
        let username;
        let avatar;
        if(this.props.user.currentUser){
            username = this.props.user.currentUser.username;
            avatar = this.props.user.currentUser.avatar
        }
        
        return (
            <HeaderWrapper>
                <HeaderTitle>Facebook Clone</HeaderTitle>
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
                            <HeaderItem>
                                <Message fill='#fff' className='icon'/>
                                <p className='notification'>2</p>
                                <Dropdown>
                                    <DropdownTitle>
                                        <h4>Messages</h4>
                                    </DropdownTitle>
                                </Dropdown>
                            </HeaderItem>
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
                            
                            <HeaderItem className='User'>
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
        user: state.user
    }
}

export default connect(mapStateToProps)(Header)