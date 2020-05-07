import React, { useState } from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

import {signUpStart} from '../../redux/user/user.action';
import './sign-up.styles.scss';

// class SignUp extends React.Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          displayName: '',
//          email: '',
//          password: '',
//          confirmPassword: ''
//       }
//     }

//     handleSubmit = async event => {
//         event.preventDefault();

//         const { signUpStart } = this.props;
//         const { displayName, email, password, confirmPassword } = this.state;

//         if (password !== confirmPassword) {
//             alert("Passwords don't match");
//             return;
//         }

//         signUpStart({ displayName, email, password });
        
//         // try {
//         //     const { user } = await auth.createUserWithEmailAndPassword(email,password);

//             // await createUserProfileDocument(user, {displayName});

//             // this.setState({
//             //     displayName: '',
//             //     email: '',
//             //     password: '',
//             //     confirmPassword: ''
//             // });
//         // }

//         // catch (error) {
//         //     console.error(error);
//         // }
//     };

//     handleChange = event => {
//         const { name, value } = event.target;

//         this.setState({[name]: value});
//     }


//------------ converting into HOOKS ------------
const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

    signUpStart({ displayName, email, password });
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    }
    
    return (
      <div className="sign-up">
          <h1>SIGN UP</h1>
          <h2 className="animated tada delay-2s">I Do Not Have An Account</h2>
          <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput 
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            label="Display Name*"
            required
        />
        <FormInput 
            type="email"
            name="email"
            value={email}
            // onChange={this.handleChange}
            onChange={handleChange}
            label="Email*"
            required
        />
        <FormInput 
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password*"
            required
        />
        <FormInput 
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password*"
            required
        />
        <div className='buttons'>
            <CustomButton type="submit">SIGN UP</CustomButton>
            <CustomButton type="reset">RESET</CustomButton>
        </div>
        </form>
      </div>
    );
  };

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})
export default connect(null, mapDispatchToProps)(SignUp);
