import React from 'react';
import { connect} from 'react-redux';
import {Title, LastestPhoto, Content, Profile, Row, Empty } from './User.styled';
import { Grid, LeftContent, CenterContent, RightContent } from '../../components/GridWrapper/GridWrapper.styled'
import Card from '../../components/Card/Card.component';

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
        const { match } = this.props.match;
        if(this.props.posts[match.params.uid]){
            const userPosts = this.props.posts[match.params.uid]; 
            if(userPosts){
                const filterPosts = Object.keys(this.props.posts[match.params.uid]).filter(postID => userPosts[postID] )
                return filterPosts.map(postID => {
                    const post = userPosts[postID];
                    console.log(post)
                    if(post.image){
                        const image = post.image.replace("public",'http://localhost:5000')
                        return <Card key={post._id} listImage={[image]} post={post} showPopUp={this.handleShowPopUp} />
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

export default connect(mapStateToProps)(Timeline);
