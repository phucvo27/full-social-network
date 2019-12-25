import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/Header.component';
import LoginPage from './pages/Login/Login.component';
import HomePage from './pages/Home/Home.component';
import UserPage from './pages/User/User.component';
import ChatPage from './pages/Chat/Chat.component';
//import { setCurrentUser } from './redux/user/user.actions';
//import getSocket from './utils/getSocketConnection';
import Popup from './components/Popup/Popup.component'

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            checkingSession: false
        }
    }

    // async componentDidMount(){
    //     // try{
    //     //     const res = await fetch('http://localhost:5000/api/auth/check-session', {
    //     //         credentials: 'include'
    //     //     });
    //     //     if(res.status === 200){
    //     //         const jsonData = await res.json();
    //     //         console.log(jsonData);
    //     //         this.props.dispatch(setCurrentUser(jsonData.data));
                
    //     //     }
    //     // }catch(e){
    //     //     //this.props.dispatch(userLoginFail({error: 'Something went wrong'}))   
    //     // }
        
        
    //     // this.setState(()=>({checkingSession: false}))
    //     // const res = await axios.get('/api/test');
    //     // console.log(res.data);
    //     // console.log('componentDidMount')
    //     // // const socket = io('http://localhost:5000', {
    //     // //     query: {
    //     // //         token: 'uid-1234-5'
    //     // //     }
    //     // // })
        

    // }
    render(){
        const { currentUser } = this.props.user;
        console.log(currentUser)
        return this.state.checkingSession ? <p>Loading..</p> : (
            <BrowserRouter> 
                <Header />
                <Switch>
                    <Route exact path='/' render={() => currentUser !== null ? <HomePage /> : <LoginPage />} />
                    <Route path='/login' render={() => currentUser !== null ? <Redirect to='/' /> : <LoginPage /> } />
                    <Route path='/chat' render={() => currentUser !== null ?  <ChatPage /> : <Redirect to='/login' /> } />
                    <Route path='/user/:uid' render={(match) => currentUser !== null ? <UserPage match={match} /> : <Redirect to='/login' />} />
                </Switch>
                <Popup />
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(App);
