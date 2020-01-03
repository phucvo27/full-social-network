import React from 'react';
// import { HomepageWrapper , LeftContent , CenterContent, RightContent} from './Homepage.styled';
import { Grid , LeftContent , CenterContent, RightContent} from '../../components/GridWrapper/GridWrapper.styled';
import { Content, Title, LastestPhoto, Profile, Row} from '../User/User.styled';
import Card from '../../components/Card/Card.component';
import image from '../../assets/test-image.jpg';
import StatusForm from '../../components/StatusForm/Status-Form.component';
import getSocket from '../../utils/getSocketConnection';
import { connect } from 'react-redux';

class HomePage extends React.Component{
    
    async componentDidMount(){
        console.log('in didMount HomePage')
        const { uid } = this.props.user.currentUser;
        const socket = getSocket(uid);
        socket.on('connect', ()=>{
            console.log(socket.id)
        });
        socket.on('login-succes', (data)=>{
            console.log('new emit message')
            console.log(data)
        })
        socket.on('notification', (data)=>{
            console.log('this is notification');
            console.log(data)
        })
    }
    render(){
        console.log('in render homepage')
        return (
            <Grid className='home-page root'>
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
                    <StatusForm />
                    <Card />
                    <Card listImage={[image]} />
                    <Card />
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
    console.log('in mapstate homepage')
    return {
        user: state.auth
    }
}
export default connect(mapStateToProps)(HomePage);