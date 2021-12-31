import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Navbar from './New-Folder/navbar';
// import App from './App';
// import Footer from './New-Folder/footer';
import reportWebVitals from './reportWebVitals';
// import logo from '../src/logo.svg'
import Header from './New-Folder/project'
import Main from './New-Folder/main'


ReactDOM.render(
  <React.StrictMode>
  {/* <Navbar/> */}
  <Header/>
  <Main/>
    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
