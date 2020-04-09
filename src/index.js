import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/user/store';
import AppRoute from './App_route';

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
        {/* <AppRoute /> */}
    </BrowserRouter>
</Provider>
, document.getElementById('root')
);