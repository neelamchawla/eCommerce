import React from 'react';
// import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assests/crown.svg';
// import './header.styles.scss';

import { HeaderContainer
  , LogoContainer
  , OptionsContainer
  // , OptionDiv  // replacing "OptionDiv" with "OptionLink as = 'div'"
  , OptionLink
} from './header.styles';

// import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.action';


const Header = ({ currentUser, hidden, signOutStart }) =>
  (

    // <div className="header">
    //   <Link className='logo-container' to ='/'>
    //     <Logo className='logo' />
    //   </Link>

    //   <div className='options' >
    //       <Link className='option' to='/shop'>SHOP</Link>
    //       {/* <Link className='option' to='/shop'>CONTACT</Link> */}
    //       {
    //         currentUser ?
    //         (<div className='option' onClick={() => { alert("Successfully Sign Out")
    //           auth.signOut()
    //           return window.location.reload()
    //         }}>
    //           SIGN OUT
    //           </div>)
    //         :
    //         (<Link className='option' to='/signin'>SIGN IN</Link>)
    //       }

    //       <CartIcon />
    //   </div>
    //   {
    //     hidden ? null :
    //     <CartDropdown />
    //   }
    // </div>

    <HeaderContainer>
      <LogoContainer className='logo-container' to ='/'>
        <Logo className='logo' />
      </LogoContainer>

      <OptionsContainer>
          <OptionLink to='/shop'>
            SHOP
          </OptionLink>
          {
            currentUser ?
            (<OptionLink as = 'div' onClick={
                signOutStart
              // () =>
              // {   
              //   alert("Successfully Sign Out")
              //   auth.signOut()
              //   return window.location.reload()
              // }
              }>
                SIGN OUT
             </OptionLink>
            )
            :
            (<OptionLink to='/signin'>
              SIGN IN
             </OptionLink>
            )
          }
          <CartIcon />
      </OptionsContainer>

      {
        hidden ? null :
        <CartDropdown />
      }

    </HeaderContainer>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

// export default withRouter(connect(mapStateToProps)(Header));
export default connect(mapStateToProps, mapDispatchToProps)(Header);