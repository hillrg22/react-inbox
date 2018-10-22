import React, { Component } from 'react';

import './index.css';
import MessageList from './components/MessageList'
import Toolbar from './components/Toolbar'
import Compose from './components/Compose'
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        messageData: [],
      }
  }
  componentDidMount(){
    fetch('http://localhost:8082/api/messages')
    .then(res => res.json())
    .then(data => {
      this.setState({messageData: data})
      console.log(this.state.messageData)
    })
  }

  msgReadToggle = (e, id) => {
    console.log("msg read toggle", id)
    const messages = this.state.messageData
    const newMessages = messages.map((message) => {
        if (message.id == id) message.read = !message.read
        return message
    })
    this.setState({messageData: newMessages})
 }


  render() {
    return (
      <div className="App">
        <Toolbar />
        <Compose />
        <MessageList messageData={this.state.messageData} />
      </div>
    );
  }
}

export default App;
