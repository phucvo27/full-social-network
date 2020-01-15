import React from 'react';
import { connect} from 'react-redux';
import {Title, LastestPhoto, Content, Profile, Row, Empty } from './User.styled';
import { Grid, LeftContent, CenterContent, RightContent } from '../../components/GridWrapper/GridWrapper.styled'
import Card from '../../components/Card/Card.component';
//import image from '../../assets/test-image.jpg';

import Popup from '../../components/Popup/Popup.component';
class Timeline extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            postForEdit: null
        }
    }

    handleShowPopUp = (post)=>{
        this.setState(()=>({postForEdit: post}));
        
    }
    handleHidePopUp = ()=>{
        this.setState(()=>({postForEdit: null}));
    }
    renderCard = ()=>{
        console.log('in render card')
        const { match } = this.props.match;
        // const allPosts = Object.keys(this.props.posts);
        if(this.props.posts[match.params.uid]){
            const userPosts = this.props.posts[match.params.uid]; 
            if(userPosts){
                return userPosts.map(post => {
                    if(post.image !== null){
                        const image = post.image.replace("public",'http://localhost:5000')
                        return <Card key={post._id} listImage={[image]} post={post} postID={post._id} showPopUp={this.handleShowPopUp} />
                    }else{
                        return <Card key={post._id} post={post} showPopUp={this.handleShowPopUp}/>
                    }
                })
            }else{
                return <Empty> <p>No Post</p> </Empty>
            }
        }else{
            return <p>Loading...</p>
        }
        
    }
    render(){
        return (
            <Grid>
            <LeftContent>
                    <Content>
                        <Title>Profile</Title>
                        <Profile>
                            <Row>
                                <span className='title'>Name : </span>
                                <span className='desc'>Phuc Vo </span>
                            </Row>
                            <Row>
                                <span className='title'>Jobs : </span>
                                <span className='desc'>Full Stack JS Developer </span>
                            </Row>
                            <Row>
                                <span className='title'>Age : </span>
                                <span className='desc'>25 </span>
                            </Row>
                            <Row>
                                <span className='title'>Location : </span>
                                <span className='desc'>Viet Nam </span>
                            </Row>
                        </Profile>
                    </Content>
                </LeftContent>
                <CenterContent>
                    {this.renderCard()}
                    
                </CenterContent>
                <RightContent>
                    <Content>
                        <Title>Latest Photo</Title>
                        <LastestPhoto>
                            <img src='https://html.crumina.net/html-olympus/img/last-photo10-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot11-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot12-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot13-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot14-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot15-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot16-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot17-large.jpg' alt='latest' />
                            <img src='https://html.crumina.net/html-olympus/img/last-phot18-large.jpg' alt='latest' />
                        </LastestPhoto>
                    </Content>
                </RightContent>
                {this.state.postForEdit && <Popup post={this.state.postForEdit} hidePopUp={this.handleHidePopUp} />}
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         getAllPosts: uid => dispatch(getAllPost(uid))
//     }
// }

export default connect(mapStateToProps)(Timeline);
/*
<Card listImage={['https://html.crumina.net/html-olympus/img/post-photo6.jpg']}/>
<Card />
<Card listImage={[image]} />
*/