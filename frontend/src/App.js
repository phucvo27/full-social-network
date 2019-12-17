import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/Header.component';
import LoginPage from './pages/Login/Login.component';
import HomePage from './pages/Home/Home.component';
import { setCurrentUser, userLoginFail } from './redux/user/user.actions';
import axios from 'axios'

//import getSocket from './utils/getSocketConnection';

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            checkingSession: true
        }
    }

    async componentDidMount(){
        try{
            const res = await axios.get('http://localhost:5000/api/auth/check-session', {withCredentials: true});
            console.log(res)
            if(res.status === 200){
                console.log(res.data)
                this.props.dispatch(setCurrentUser(res.data.data));
                
            }
        }catch(e){
            //this.props.dispatch(userLoginFail({error: 'Something went wrong'}))   
        }
        // try{
        //     const response = await fetch('http://localhost:5000/api/auth/check-session');
        //     console.log(response.status)
        //     const myJson = await response.json();
        //     console.log(JSON.stringify(myJson));
        // }catch(e){
        //     console.log('in catch clase');
        //     console.log(e)
        // }
        
        
        this.setState(()=>({checkingSession: false}))
        // const res = await axios.get('/api/test');
        // console.log(res.data);
        // console.log('componentDidMount')
        // // const socket = io('http://localhost:5000', {
        // //     query: {
        // //         token: 'uid-1234-5'
        // //     }
        // // })
        // const socket = getSocket('phuc', '12345admin');
        // socket.on('connect', ()=>{
        //     console.log(socket.id)
        // });
        // socket.on('login-succes', (data)=>{
        //     console.log('new emit message')
        //     console.log(data)
        // })

    }
    render(){
        const { currentUser } = this.props.user;
        console.log(currentUser)
        return this.state.checkingSession ? <p>Loading..</p> : (
            <BrowserRouter> 
                <Header />
                <Switch>
                    <Route exact path='/' render={() => currentUser !== null ? <HomePage /> : <LoginPage />} />
                    <Route path='/login' render={() => currentUser !== null ? <Redirect to='/' /> : <LoginPage /> } />
                </Switch>
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
