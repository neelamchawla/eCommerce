import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './component/header/header.component';
import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import Footer from './component/footer/footer.component';
import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './component/pages/checkout/checkout.component';


import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';

import Ecommerce from './component/pages/ecommerce/ecommerce';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);
    
    return (
      <div className="App">
        <header className="App-header">
        <Header />
        <div className="buffer" />
        <Switch>
          <Route path='/ecommerce' component={Ecommerce} />
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/CheckOut' component={CheckOutPage} />
          <Route exact path='/signin' render={() => 
          currentUser ?
          (<Redirect to='/' />) :
          (<SignInAndSignUpPage />)
          }
          />
        </Switch>
        </header>
        <Footer />
      </div>
    );
  }

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
  });

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps
  , mapDispatchToProps
  )(App);
