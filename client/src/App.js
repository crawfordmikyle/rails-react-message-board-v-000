import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageListContainer from './Containers/MessageListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Message Board</h1>
        <MessageListContainer/>
      </div>
    );
  }
}

export default App;
