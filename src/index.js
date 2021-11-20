import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Auth0Provider
    domain="dev-oxzyqg97.us.auth0.com"
    clientId="tIczvZbE4WEapeLmVv8xPJlPppmfIcGa"
    redirectUri={window.location.origin}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
