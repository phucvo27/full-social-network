import React from 'react';
import { UserHeader, HeaderThumb, AddFriendButton, Author, AuthorAvatar, AuthorName, UserProfileSection } from './User.styled';
import imageHeader from '../../assets/top-header.jpg';
const Header = ({user , handleChangeSection})=>{
    return (
        <UserHeader>
            <HeaderThumb>
                <img src={imageHeader} alt='thumbnail' />
                <AddFriendButton>Add Friend</AddFriendButton>
                <Author>
                    <AuthorAvatar>
                        <img src='https://html.crumina.net/html-olympus/img/author-main1.jpg' alt='user-avatar' />
                    </AuthorAvatar>
                    <AuthorName>
                        <h1>{user.username}</h1>
                        <p>Full Stack Developer</p>
                    </AuthorName>
                </Author>
            </HeaderThumb>
            <UserProfileSection>
                <p onClick={handleChangeSection}>Timelines</p>
                <p onClick={handleChangeSection}>Photos</p>
                <p onClick={handleChangeSection}>Friends</p>
            </UserProfileSection>
        </UserHeader>
    )
}

export default Header;