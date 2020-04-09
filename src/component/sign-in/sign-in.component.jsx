import React, { Component } from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email: '',
         password: ''
      }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const { email, password } = this.state;

        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({
                email: '',
                password: ''
              });
          alert("Welcome Back");
        }
        catch (error) {
          console.log(error);
          alert(error);
        }

        // before using try n catch
        // this.setState({
        //     email: '',
        //     password: ''
        // })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name] : value })
    }
    
  render() {
    return (
      <div className="sign-in">
      <h1>SIGN IN</h1>
        <h2 className="animated tada">I Already Have An Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label= "Email*"
            required />
            <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label= "Password*" 
            required />

            <div className='buttons'>
            <CustomButton type="submit">Sign In</CustomButton>
            
            <CustomButton onClick={signInWithGoogle}
            isGoogleSignIn
            >
            Sign In With Google
            </CustomButton>
            </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
