import React, { useState } from 'react'
import { connect } from 'react-redux'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component.jsx';

// removed aft "user.sagas.js"
// import { auth, signInWithGoogle } from '../firebase/firebase.utils';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';


// class SignIn extends React.Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          email: '',
//          password: ''
//       }
//     }

//     handleSubmit = async event => {
//         event.preventDefault();
//         const { emailSignInStart } = this.props;
//         const { email, password } = this.state;

//         emailSignInStart(email, password);
        
//         // REMOVE AFT ADDING user.sagas.js
//         // try {
//         //   await auth.signInWithEmailAndPassword(email, password);
//         //   this.setState({
//         //         email: '',
//         //         password: ''
//         //       });
//         //   alert("Welcome Back");
//         // }
//         // catch (error) {
//         //   console.log(error);
//         //   alert(error);
//         // }

//         // before using try n catch
//         // this.setState({
//         //     email: '',
//         //     password: ''
//         // })
//     }

//     handleChange = event => {
//         const { value, name } = event.target

//         this.setState({ [name] : value });
//     };

// ---------- converted to HOOKS ------------
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState ({ email: '', password: ''});

  const { email, password } = userCredentials;
  
  const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target

        setCredentials({ ...userCredentials, [name] : value });
    };
    
    return (
      <div className="sign-in">
      <h1>SIGN IN</h1>
        <h2 className="animated tada">I Already Have An Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput
            name="email"
            type="email"
            // value={this.state.email}
            value={email}
            // handleChange={this.handleChange}
            handleChange={handleChange}
            label= "Email*"
            required />
            <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label= "Password*" 
            required />

            <div className='buttons'>
            <CustomButton type="submit">Sign In</CustomButton>
            
            <CustomButton 
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn
            >
            Sign In With Google
            </CustomButton>
            </div>
        </form>
      </div>
    )
  };

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
