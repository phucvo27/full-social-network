import React, { Component } from 'react';
import { UserWrapper, UserHeader, HeaderThumb, AddFriendButton, Author, AuthorAvatar, AuthorName, UserProfileSection } from './User.styled';
import { connect } from 'react-redux';
import Timeline from './User-Timeline.component';
import PhotoMasonry from '../../components/PhotoMansory/Masory.component'
import imageHeader from '../../assets/top-header.jpg';


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

    handleSendRequestAddFriend = async ()=>{
        const { match } = this.props.match;
        const friendID = match.params.uid;

        try {
            const res = await fetch(`http://localhost:5000/api/users/request/${friendID}`);
            if(res.status === 200){

            }else{
                
            }
        }catch(e){
            console.log('something went wrong')
        }
    }
    
    render(){
        return (
            <UserWrapper>
                <UserHeader>
                    <HeaderThumb>
                        <img src={imageHeader} alt='thumbnail' />
                        <AddFriendButton>Add Friend</AddFriendButton>
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

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(UserPage);