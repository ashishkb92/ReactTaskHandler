import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.subscribe(()=>{
  localStorage.setItem('tasks',JSON.stringify(store.getState()))
})
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
