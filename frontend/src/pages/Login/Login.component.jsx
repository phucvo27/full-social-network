import React , { Component } from 'react';
import { Wrapper, FormWrapper, Form, FormAvatar } from './Login.styled';
import InputField from '../../components/InputField/Input.component';
import avatar from '../../avatar.jpg';
import { userLoginStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e)=>{
        const { name, value } = e.target;
        this.setState(()=>({[name]: value}))
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.signInEmail(this.state);
    }
    render(){
        const { email, password } = this.state;
        return (
            <Wrapper>
                <FormWrapper>
                    <FormAvatar src={avatar} />
                    <Form onSubmit={this.handleSubmit}>
                        <InputField 
                            placeholder='Email'
                            type='text'
                            required
                            name='email'
                            handleChange={this.handleChange}
                            value={email}
                        />
                        <InputField 
                            placeholder='Password'
                            type='password'
                            required
                            name='password'
                            handleChange={this.handleChange}
                            value={password}
                        />
                        <button type='submit'>Submit</button>
                    </Form>
                </FormWrapper>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        signInEmail : (payload) => dispatch(userLoginStart(payload))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);