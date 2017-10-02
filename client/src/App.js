import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageListContainer from './Containers/MessageListContainer'
import Message from './Components/Message'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/messages">Open App</Link>
          <Route path="/messages" component={MessageListContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
