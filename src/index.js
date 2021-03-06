import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreService from './services/store-service';
import { StoreServiceProvider } from './components/store-service-context';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
import ErrorBoundry from './components/error-boundry';

const storeService = new StoreService();
ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <StoreServiceProvider value={storeService}>
        <Router>
          <App />
        </Router>
      </StoreServiceProvider>
    </ErrorBoundry>
 </Provider>

  ,
  document.getElementById('root'));
