import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider domain='dev-rs8pmv50.us.auth0.com' clientId='5s3kDpIQWohQj7ZlkNRruzDzQLNGgRxh' redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

