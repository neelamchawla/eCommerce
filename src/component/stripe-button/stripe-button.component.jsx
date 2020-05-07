import React from 'react'
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_dX4uqmzxTdWiHOceHvC04Mcn00oMXtK0NB';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull!!!')
    }

  return (
    <div>
        <StripeCheckout
            label = 'Pay Now'
            name = 'eCommerce'
            billingAddress
            // shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description = {`Your Total: $${price}`}
            amount = {priceForStripe}
            allowRememberMe
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    </div>
  );
};

export default StripeCheckoutButton;
