import React from 'react';
import './index.css';
//import App from './App';
import Routes from './Routes/routes'
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';


render(<Router>{Routes}</Router>, document.getElementById('rahul') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA