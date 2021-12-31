import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Header from './components/Header'
// import Meme from './components/meme'
// import Main from './components/main'
// import State from './components/Usesate'
// import Form from './components/forms'
// import Login from './components/LoginForm'
// import Api from './components/ApiCall'
import WindowTracker from './components/windowWidth'

ReactDOM.render(
  <React.StrictMode>
<WindowTracker/>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//   {/* <Header /> */}
// {/* <State/> */}
//   <Meme /> 
//    {/* <Main/> */}
//     {/* <App /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
