import React, { Component } from 'react';
import './homepage.styles.scss';
import Directory from '../../directory/directory.component';

const HomePage = ({ history }) =>(
      <div className="homepage">
        <Directory />
      </div>
    );

export default HomePage
