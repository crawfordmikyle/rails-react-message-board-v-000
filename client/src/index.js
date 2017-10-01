import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import thunk from 'redux-thunk';
import messagesReducer from './Reducers/messagesReducer'

const rootReducer = combineReducers({
  messagesReducer,
});

const middleware = [thunk];

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)

ReactDOM.render(

  <Provider store={store}>
    <Router store={store}>
      <Route expact path="/" component={App}/>
    </Router>
  </Provider>

,document.getElementById('root'));
registerServiceWorker();
