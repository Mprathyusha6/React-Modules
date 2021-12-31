import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Wish from './components/Wish'
// import App from './App'
import ContactApp from './components/contactApp'
// import JokeDesign from './components/JokesDesign'



// ReactDOM.render(<ContactApp />, document.getElementById("root"))




ReactDOM.render(
  <React.StrictMode>
  <ContactApp />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
