import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Core from './components/core.js';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBgS9Q4wWxvcuJMdLLTcyecxx_eGcjEp7k",
    authDomain: "todolist-8dd90.firebaseapp.com",
    databaseURL: "https://todolist-8dd90.firebaseio.com",
    projectId: "todolist-8dd90",
    storageBucket: "todolist-8dd90.appspot.com",
    messagingSenderId: "301726090323"
  };
  firebase.initializeApp(config);

ReactDOM.render(<Core />, document.getElementById('root'));
registerServiceWorker();
