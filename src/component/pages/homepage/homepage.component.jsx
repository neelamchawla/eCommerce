import React from 'react';
import Directory from '../../directory/directory.component';

import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles';

const HomePage = () =>(
// const HomePage = ({ history }) =>(
  // after adding styled component for css
      // <div className="homepage">
        
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
      
      // </div>
    );

export default HomePage
