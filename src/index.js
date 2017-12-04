import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Routes from './components/Routes';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import 'babel-polyfill';

const apiEnvs = {
    a: 'https://api.iextrading.com/1.0'
}

const rootElement = document.getElementById('root');
let apiUrl;
if (window.location.search) {
    // remove '?' and split on =
    const envLoc = window.location.search.slice(1).split('=');
    if (envLoc[0].toLowerCase() === 'env' && apiEnvs.hasOwnProperty(envLoc[1])) {
        apiUrl = apiEnvs[envLoc[1]]
    }
    else {
        apiUrl = rootElement.getAttribute('api-url');
    }
}
else {
    apiUrl = rootElement.getAttribute('api-url');
}


const store = configureStore(apiUrl);


ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, rootElement
);
