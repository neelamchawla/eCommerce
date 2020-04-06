import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
// import logo from './extra/logo.svg'
import './App.css';

import Header from './component/header/header.component';
import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './component/firebase/firebase.utils';

// const HatsPage = () => (
//   <div>
//     <h1>Hats Page</h1>
//     <Link to={'/'}>Home Page</Link>
//   </div>
// )

class App extends Component {  
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    // auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });
    //   console.log(user)
    // })
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({ currentUser: user });
        
        console.log(user)
      })
  }

  componentWillUpdate() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        {/* <img src={logo} className='App-logo' alt="logo" /> */}
        <Header currentUser={this.state.currentUser}/>
        {/* <br /><br /><br /> */}
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

export default App

