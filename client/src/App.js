import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './Components/MessageList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Message Board</h1>
        <MessageList/>
      </div>
    );
  }
}

export default App;
