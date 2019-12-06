import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import WebFont from 'webfontloader';
import SignupForm from './components/SignupForm';
import RegisterForm from './components/RegisterForm';
import SigninForm from './components/SigninForm';
import LoginForm from './components/LoginForm';

import { Provider } from 'react-redux';
import { store } from './_helpers';
import { history } from './_helpers';

const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR DOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "STORAGE BUCKET",
    messagingSenderId: "MESSAGING SENDER ID",
    appId: "APP ID"
};

firebase.initializeApp(config);

WebFont.load({
    google: {
        families: ['Montserrat', 'Playfair Display SC']
    }});

// ReactDOM.render(<App />, document.getElementById('root'));

const Root = () => (
    <Provider store={ store }>
        <App />
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
