import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assests/crown.svg';
import './header.styles.scss';

import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, hidden }) =>

  (
    <div className="header">
      <Link className='logo-container' to ='/'>
        <Logo className='logo' />
      </Link>

      <div className='options' >
          <Link className='option' to='/shop'>SHOP</Link>
          {/* <Link className='option' to='/shop'>CONTACT</Link> */}
          {
            currentUser ?
            (<div className='option' onClick={() => { alert("Successfully Sign Out")
              auth.signOut()
              return window.location.reload()
            }}>SIGN OUT</div>)
            :
            (<Link className='option' to='/signin'>SIGN IN</Link>)
          }

          <CartIcon />
      </div>
      {
        hidden ? null :
        <CartDropdown />
      }
    </div>
  )
  

// before selectCurrentUser AND selectCartHidden
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
//   currentUser, hidden
// });

//before cart hidden
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// });

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });
// or
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});


export default withRouter(connect(mapStateToProps)(Header));