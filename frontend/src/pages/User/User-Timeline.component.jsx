import React from 'react';
import { connect} from 'react-redux';
import {Title, LastestPhoto, Content, Profile, Row } from './User.styled';
import { Grid, LeftContent, CenterContent, RightContent } from '../../components/GridWrapper/GridWrapper.styled'
import Card from '../../components/Card/Card.component';
import image from '../../assets/test-image.jpg';
import { getAllPost } from '../../redux/post/post.actions';


class Timeline extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { getAllPosts } = this.props;
        const { match } = this.props.match;
        console.log(match);
        console.log(this.props)
        getAllPosts(match.params.uid)
    }

    renderCard = ()=>{
        console.log(this.props.posts);
        const { match } = this.props.match;
        const allPosts = Object.keys(this.props.posts);
        
        if(allPosts.length > 0){
            const userPosts = this.props.posts[match.params.uid]; 
            if(userPosts.length > 0){
                return userPosts.map(post => {
                    if(post.image !== null){
                        const image = post.image.replace("public",'http://localhost:5000')
                        return <Card key={post._id} listImage={[image]} content={post.content} postID={post._id} />
                    }else{
                        return <Card key={post._id} content={post.content} />
                    }
                })
            }else{
                return <p>No Post</p>
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
                    <Card listImage={['https://html.crumina.net/html-olympus/img/post-photo6.jpg']}/>
                    <Card />
                    <Card listImage={[image]} />
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
                
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllPosts: uid => dispatch(getAllPost(uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);