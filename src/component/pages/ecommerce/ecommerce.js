import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assests/crown.svg';
import './ecommerce.styles.scss';

const Ecommerce = () => {
  return (
    <div className="ecommerce">
      WELCOME TO FASHION ECOMMERCE WEBSITE
      <p>Press This To Continue -> 
        <span>
            <Link className='logo-container' to ='/'>
                <Logo className='logo' />
            </Link>
        </span>
      </p>
    </div>
  )
}

export default Ecommerce
