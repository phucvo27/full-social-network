import React, { Component } from 'react';
import { UserWrapper, UserHeader, HeaderThumb, Author, AuthorAvatar, AuthorName, UserProfileSection } from './User.styled';

import Timeline from './User-Timeline.component';
import PhotoMasonry from '../../components/PhotoMansory/Masory.component'
import imageHeader from '../../assets/top-header.jpg'
class UserPage extends Component{

    constructor(props){
        super(props);
        //console.log(useParams())
        this.state = {
            currentSection: 'timelines'
        }
    }

    renderSection = ()=>{
        const { currentSection } = this.state;
        if(currentSection === 'timelines'){
            return <Timeline match={this.props.match} />
        }else if( currentSection === 'photos'){
            return <PhotoMasonry />
        }
    }

    handleChangeSection = e =>{
        const currentSection = e.target.innerHTML.toLowerCase();
        this.setState(()=>({currentSection}))
    }
    
    render(){
        return (
            <UserWrapper>
                <UserHeader>
                    <HeaderThumb>
                        <img src={imageHeader} alt='thumbnail' />
                        <Author>
                            <AuthorAvatar>
                                <img src='https://html.crumina.net/html-olympus/img/author-main1.jpg' alt='user-avatar' />
                            </AuthorAvatar>
                            <AuthorName>
                                <h1>Phuc Vo</h1>
                                <p>Full Stack Developer</p>
                            </AuthorName>
                        </Author>
                    </HeaderThumb>
                    <UserProfileSection>
                        <p onClick={this.handleChangeSection}>Timelines</p>
                        <p onClick={this.handleChangeSection}>Photos</p>
                        <p onClick={this.handleChangeSection}>Friends</p>
                    </UserProfileSection>
                </UserHeader>
                {
                    this.renderSection()
                }
            </UserWrapper>
        )
    }
}
export default UserPage;