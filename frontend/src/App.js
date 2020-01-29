import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/Header.component';
import LoginPage from './pages/Login/Login.component';
import HomePage from './pages/Home/Home.component';
import UserPage from './pages/User/User.container.component';
import ChatPage from './pages/Chat/Chat.component';

import { getBasicUserInforStart } from './redux/user/user.actions';
import { getAllPost } from './redux/post/post.actions';
import { helperSocketListener } from './utils/helpers';
import { getSocketConnection } from './redux/socket/socket.actions';
import getSocket from './utils/getSocketConnection';
class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            checkingSession: false
        }
    }
    // handle socket connection
    shouldComponentUpdate(nextProps, nextStates){
        if(this.props.socket === null && nextProps.socket !== null){
            // making sure listen all event that needed for our app !
            helperSocketListener(nextProps.socket, this.props.dispatch);
        }
        if(this.props.user.currentUser !== null && this.props.socket === null){
            /*
                this case will be happened :
                    when user is logged in success -> get new socket
                    When user refresh the page ( already logged in ) -> re-connect to socket server
             */ 
            const { uid } = this.props.user.currentUser;
            const socket = getSocket(uid);
            socket.on('connect', ()=>{
                if(socket.connected){
                    this.props.dispatch(getSocketConnection(socket))
                }
            })
        }
        return true;
    }
    getInforAndPostOfUser = (uid)=>{
        const { getInforOfUser, getAllPosts} = this.props;
        getInforOfUser(uid);
        getAllPosts(uid);
    }

    
    render(){
        const { currentUser } = this.props.user;
        return (
            <BrowserRouter> 
                <Header />
                <Switch>
                    <Route exact path='/' render={() => currentUser !== null ? <HomePage /> : <LoginPage />} />
                    <Route path='/login' render={() => currentUser !== null ? <Redirect to='/' /> : <LoginPage /> } />
                    <Route path='/chat' render={() => currentUser !== null ?  <ChatPage /> : <Redirect to='/login' /> } />
                    <Route path='/user/:uid' render={(match) => {
                        if(currentUser !== null){
                            const uid = match.match.params.uid
                            this.getInforAndPostOfUser(uid)
                            return <UserPage match={match} /> 
                        }
                        else{
                            return <Redirect to='/login' />
                        } 
                    }} />
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user: state.auth,
        socket: state.socket
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInforOfUser: uid => dispatch(getBasicUserInforStart(uid)),
        getAllPosts: uid => dispatch(getAllPost(uid))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
