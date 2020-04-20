import React from 'react'
import { connect } from 'react-redux'
// createSelector
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom';

import './checkout.styles.scss';
import back from '../../../assests/back.png';

import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart.selectors'
import CheckoutItem from '../../checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../stripe-button/stripe-button.component'

const CheckOutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <h1 className="title animated flipInX delay-1s">CHECK OUT PAGE</h1>
        <Link to ='/shop'>
            <span className="more_btn animated bounceIn">Still want to Check more Item, Press this</span>
            <img src={back} className="back_btn" alt="back_button" />
        </Link>
    
    <div className="checkout-header animated flipInX delay-2s">
        <div className="header-block">
            <span>PRODUCT</span>
        </div>
        <div className="header-block">
            <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
            <span>QUANTITY</span>
        </div>
        <div className="header-block">
            <span>PRICE</span>
        </div>
        <div className="header-block">
            <span>REMOVE</span>
        </div>
    </div>
    {
        cartItems.map(cartItem =>
            // cartItem.name
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
    }

        <div className='total'>
            <hr />
            <span>TOTAL: ${total}</span>
            <StripeCheckoutButton price={total} />
        </div>
        <div className="note">*Please use thefollowing Test Credit Card for Payments*<br/>
        4242 4242 4242 4242 -- Exp: 01/22 -- CVV: 123
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);
