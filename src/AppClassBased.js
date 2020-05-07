import React, { Component } from 'react'
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

// import { auth, createUserProfileDocument
  //-- collection into firebase added -- unchk
  // , addCollectionAndDocuments  //remove this as collectionsArray
// } from './component/firebase/firebase.utils';

// import { setCurrentUser } from './redux/user/user.action';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';

import Ecommerce from './component/pages/ecommerce/ecommerce';

//-- collection into firebase added -- unchk
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';  //remove this as collectionsArray 


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
    const { checkUserSession } = this.props;
    checkUserSession();
  }
    //-- collection into firebase added -- unchk
    // -- add props property aft setCurrentUser add
    // const { setCurrentUser, collectionsArray } = this.props;
// -------------------------------
    //== remove collectionsArray after async the collection data to firebase
    // const { setCurrentUser } = this.props;

    // auth.onAuthStateChanged(user => {
    //   this.setState({ currentUser: user });
    //   console.log(user)
    // })
// ---------- aftr adding saga remove this all lines ---
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
    //     // this.setState({ currentUser: user });
    //     // console.log(user)
    //     // createUserProfileDocument(user);

    //     if (userAuth) {
    //       const userRef = await createUserProfileDocument(userAuth);
          
    //       userRef.onSnapshot(snapShot => {
    //         // whenever there is any add/delete or any updates are made it ssends data to snapshot listner and it gives o/p in setCurrentUser -> this way v get currentUser > shoplist

    //         // console.log(snapShot.data());
    //         // this.setState({
    //         //   currentUser: {
    //         //     id: snapShot.id,
    //         //     ...snapShot.data()
    //         //   }
    //         // }
    //         // , () => {
    //         //   console.log(this.state);
    //         // }
    //         // )

    //         //-------- currentUser replace with this
    //         setCurrentUser({
    //             id: snapShot.id,
    //             ...snapShot.data()
    //           });
    //       }); 
    //     }
    //     // this.setState({ currentUser: userAuth });

    //     //--- currentUser replace with this
    //     setCurrentUser( userAuth );
        
    //     //-- collection into firebase added -- unchk
    //     //   addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items}))
    //     // );
    //   });
    //-------------------------------------
  // }
  
  componentWillUpdate() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        {/* <Header currentUser={this.state.currentUser}/> */}
        {/* before redux */}
        
        <Header />
        {/* after redux */}

        <div className="buffer" />
        <Switch>
          <Route path='/ecommerce' component={Ecommerce} />
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/CheckOut' component={CheckOutPage} />
          
          {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
          {/* before mapStateToProps */}

          <Route exact path='/signin' render={() => 
          this.props.currentUser ?
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
}

//--- Redirect -> for signin ability
// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });

// after adding selectCurrentUser
// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state)
// });

// and after adding createStructuredSelector
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
  //-- collection into firebase added -- unchk
  // , collectionsArray: selectCollectionsForPreview
});

//--- remove dispatch aft moving into "user.sagas"
// remove constructor after adding this
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

// before mapStateToProps
// export default connect(null, mapDispatchToProps)(App);
export default connect(mapStateToProps
  , mapDispatchToProps
  )(App);
