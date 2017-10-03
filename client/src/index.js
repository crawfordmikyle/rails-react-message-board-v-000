import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import messagesReducer from './Reducers/messagesReducer'

const rootReducer = combineReducers({
  messages: messagesReducer,
});

const middleware = [thunk];

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)

ReactDOM.render(

  <Provider store={store}>
    <App store={store}/>
  </Provider>

,document.getElementById('root'));
registerServiceWorker();
