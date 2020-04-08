import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
// import logo from './extra/logo.svg'
import './App.css';

import Header from './component/header/header.component';
import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './component/firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//     <Link to={'/'}>Home Page</Link>
//   </div>
// )

class App extends Component {  
  // aft adding mapDispatchToProps remove this
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      currentUser: null
  //   }
  // }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    // -- add props property aft setcurrentuser add
    const { setCurrentUser } = this.props;

    // auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });
    //   console.log(user)
    // })
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
        // this.setState({ currentUser: user });
        // console.log(user)
        // createUserProfileDocument(user);

        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot(snapShot => {
            // console.log(snapShot.data());
            // this.setState({
            //   currentUser: {
            //     id: snapShot.id,
            //     ...snapShot.data()
            //   }
            // }
            // , () => {
            //   console.log(this.state);
            // }
            // )

            //-------- currentUser replace with this
            this.props.setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
          }); 
        }
        // this.setState({ currentUser: userAuth });

            //--- currentUser replace with this
        setCurrentUser( userAuth );
      });
  }

  componentWillUpdate() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <img src={logo} className='App-logo' alt="logo" /> */}
        {/* <Header currentUser={this.state.currentUser}/> */}
        {/* before redux */}
        
        <Header />
        {/* after redux */}

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
        </header>
      </div>
    )
  }
}

// remove constructor after adding this
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
