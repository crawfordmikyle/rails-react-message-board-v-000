import React, { Component } from 'react';
import './App.css';
import MessageListContainer from './Containers/MessageListContainer'
import Navbar from './Components/Navbar'
import PageHeader from './Components/PageHeader'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <PageHeader/>
          <Navbar/>
          <Route path="/messages" component={MessageListContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
