import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import empty_cart from '../../assests/empty_cart.png';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({  cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length
                ? (cartItems.map( (cartItem) => (
                    <CartItem key={cartItem.id}
                    item={cartItem}
                    />
                ))
                ) : (
                    <div className="empty-message">
                    <img src={empty_cart} alt='empty_cart' /><br/>
                    <span className="empty-message"> Your cart is Empty</span>
                    </div>
                )
            }
        </div>
            {/* after adding history add onclick */}
            <CustomButton onClick={() => history.push('/CheckOut')}>
                GO TO CHECKOUT
            </CustomButton>
    </div>
);

// const mapStateToProps = state => ({
//     cartItems: selectCartItems(state)
// });

// after adding createStructuredSelector
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// It makes sure, that the cart dropdown component don't re-render whenever state changes that is un-related to cart items. ie. If we sign out, It makes sure cart items in cart dropdown and cart count, doen't change with any other state change takes place

// before adding selectCartItems
// const mapStateToProps = ({ cart: {cartItems} }) => ({
//     cartItems
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
