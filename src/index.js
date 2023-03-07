import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
  option 1 preparations:
  - npx create-react-app appName
  - npm start
  - npm install react-bootstrap bootstrap

  option 2 preparations
  - npm install -g create-react-app
  - create-react-app appName
  - npm start
  - npm install react-bootstrap bootstrap
*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* const name = 'John Smith'
const user = {
  firstName: 'Jane',
  lastName: 'Smith'
}

function formatName(parameterUser) {
  return parameterUser.firstName + ' ' + parameterUser.lastName;
}

const element = 
<div>
  <h1>Hello, {formatName(user)}</h1>

</div> 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element); */