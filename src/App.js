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
        unreadCount: '',
        composeClicked: false
      }
  }



  componentDidMount(){
    fetch('http://localhost:8082/api/messages')
    .then(res => res.json())
    .then(messages => {
      this.setState({messageData: messages})
      console.log(this.state.messageData)
    })
  }

  composeMessage = () => {
    const composeClicked = this.state.composeClicked
    if(composeClicked) {
      return <Compose/>
    }
  }

  composeToggle = (event) => {
    this.setState({composeClicked: !this.state.composeClicked})
  }

  msgReadToggle = (e, id) => {
    console.log("msg read toggle", id)
    const messages = this.state.messageData
    const newMessages = messages.map((message) => {
        if (message.id == id) message.read = true
        return message
    })
    this.setState({messageData: newMessages})
 }

  toggleStarred = (event, messageId) => {
    fetch("http://localhost:8082/api/messages", {
      method: 'PATCH',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({
        messageIds: [messageId],
        command:"star"
      })
    })
      .then(response => response.json())
      .then(newMessages =>{
        this.setState({
          messageData: newMessages
        })
      })
  }


  render() {

    return (
      <div className="App">
        <Toolbar
        composeClicked = {this.state.composeClicked}
        composeToggle = {this.composeToggle}
        />
        {this.composeMessage()}
        <MessageList toggleStarred={this.toggleStarred}
                    messageData={this.state.messageData}
                    msgReadToggle={this.msgReadToggle}/>
      </div>
    );
  }
}

export default App;
