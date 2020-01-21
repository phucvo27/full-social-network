import React, { Component } from 'react';
import { UserWrapper, UserHeader, HeaderThumb, AddFriendButton, Author, AuthorAvatar, AuthorName, UserProfileSection } from './User.styled';
import { connect } from 'react-redux';
import Timeline from './User-Timeline.component';
import PhotoMasonry from '../../components/PhotoMansory/Masory.component'
import imageHeader from '../../assets/top-header.jpg';
import { getBasicUserInforStart } from '../../redux/user/user.actions';
import { getAllPost } from '../../redux/post/post.actions';

import Spinner from '../../components/Spinner/Spinner.component';
class UserPage extends Component{

    constructor(props){
        super(props);
        //console.log(useParams())
        this.state = {
            currentSection: 'timelines',
            isLoading: true,
        }
    }

    // componentDidMount(){
    //     const { match } = this.props.match;
    //     this.props.getInforOfUser(match.params.uid)
    //     console.log('this is componentDidMout of userPage')
    // }

    
    renderSection = ()=>{
        console.log('im in render section')
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

    renderHelper = () =>{
        const { match } = this.props.match;
        const uid = match.params.uid
        const { user, posts, getInforOfUser, getAllPosts } = this.props;
        if(!user[uid] && !posts[uid]){
            this.setState(()=>({isLoading: false}))
            return (
                <UserWrapper className='root'>
                    <UserHeader>
                        <HeaderThumb>
                            <img src={imageHeader} alt='thumbnail' />
                            <AddFriendButton>Add Friend</AddFriendButton>
                            <Author>
                                <AuthorAvatar>
                                    <img src='https://html.crumina.net/html-olympus/img/author-main1.jpg' alt='user-avatar' />
                                </AuthorAvatar>
                                <AuthorName>
                                    <h1>{this.props.user[match.params.uid] ? this.props.user[match.params.uid].username : 'Loading..'}</h1>
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
        }else {
            this.setState(()=>({isLoading: true}))
            getInforOfUser(uid);
            getAllPosts(uid);
            
            return <Spinner />
        }
    }
    
    render(){
        const { match } = this.props.match;
        console.log(this.props)
        return (
            <UserWrapper className='root'>
                <UserHeader>
                    <HeaderThumb>
                        <img src={imageHeader} alt='thumbnail' />
                        <AddFriendButton>Add Friend</AddFriendButton>
                        <Author>
                            <AuthorAvatar>
                                <img src='https://html.crumina.net/html-olympus/img/author-main1.jpg' alt='user-avatar' />
                            </AuthorAvatar>
                            <AuthorName>
                                <h1>{this.props.user[match.params.uid] ? this.props.user[match.params.uid].username : 'Loading..'}</h1>
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
        user: state.users,
        posts: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getInforOfUser: uid => dispatch(getBasicUserInforStart(uid)),
        getAllPosts: uid => dispatch(getAllPost(uid))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);