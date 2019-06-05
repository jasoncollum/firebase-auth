import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app'
import 'semantic-ui-css/semantic.min.css';

const firebaseConfig = {
    apiKey: "AIzaSyATFUEWIYgHlpwOvyAOY3eZ5GwlI4xzX7I",
    authDomain: "learning-auth-d95ac.firebaseapp.com",
    databaseURL: "https://learning-auth-d95ac.firebaseio.com",
    projectId: "learning-auth-d95ac",
    storageBucket: "learning-auth-d95ac.appspot.com",
    messagingSenderId: "69657063046",
    appId: "1:69657063046:web:677c6f6b874d1463"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
