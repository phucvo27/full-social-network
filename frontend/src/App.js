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
class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            checkingSession: false
        }
    }
    getInforAndPostOfUser = (uid)=>{
        const { getInforOfUser, getAllPosts} = this.props;
        getInforOfUser(uid);
        getAllPosts(uid);
    }
    render(){
        const { currentUser } = this.props.user;
        console.log(currentUser)
        return this.state.checkingSession ? <p>Loading</p> : (
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
        user: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInforOfUser: uid => dispatch(getBasicUserInforStart(uid)),
        getAllPosts: uid => dispatch(getAllPost(uid))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
