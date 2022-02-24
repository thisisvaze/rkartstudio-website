import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import * as http from "http";

var firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyAt0-JblT3a74odXM5GRiDYcZWfqyYYyPA",
  authDomain: "rk-art-studio-3808e.firebaseapp.com",
  databaseURL: "https://rk-art-studio-3808e.firebaseio.com",
  projectId: "rk-art-studio-3808e",
  storageBucket: "rk-art-studio-3808e.appspot.com",
  messagingSenderId: "371074444453",
  appId: "1:371074444453:web:ce39719d8d2c20f097314c",
  measurementId: "G-MZLKQZ034J"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
