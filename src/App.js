import React, { Component } from 'react';

import './App.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import Compose from './components/Compose'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Compose />
        <MessageList />
      </div>
    );
  }
}

export default App;
