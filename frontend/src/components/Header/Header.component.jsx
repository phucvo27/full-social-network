import React from 'react';
import FormInput from '../InputField/Input.component'
import { ReactComponent as Message} from '../../assets/SVG/Message.svg';
import { ReactComponent as Notification} from '../../assets/SVG/Notification.svg';
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

class Header extends React.Component{

    render(){
        console.log(this.props.currentUser)
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
                            <HeaderItem>
                                <Message fill='#fff' className='icon'/>
                                <p className='notification'>2</p>
                                <Dropdown>
                                    <DropdownTitle>Notification</DropdownTitle>
                                </Dropdown>
                            </HeaderItem>

                            <HeaderItem className='User'>
                                <img src='https://html.crumina.net/html-olympus/img/author-page.jpg' alt='user-avatar'/>
                                <p>Phuc Vo</p>
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