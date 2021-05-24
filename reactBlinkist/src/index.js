import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';

const domain = "dev-9v1mo98c.us.auth0.com";
const clientId = "wY4M31B4A86Cj2RBku4HizjcTcPx00Sv";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
    domain='dev-9v1mo98c.us.auth0.com'
    clientId='wY4M31B4A86Cj2RBku4HizjcTcPx00Sv'
    redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
