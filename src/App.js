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
        composeClicked: false,
        allSelected: false,
        someSelected: true,
        noneSelected: false
      }
  }

  componentDidMount(){
    fetch('http://localhost:8082/api/messages')
    .then(res => res.json())
    .then(messages => {
      this.setState({messageData: messages})
    })
  }

  composeMessage = () => {
    const composeClicked = this.state.composeClicked
    if(composeClicked) {
      return <Compose onMessageSent={this.onMessageSent}/>
    }
  }

  composeToggle = (event) => {
    this.setState({composeClicked: !this.state.composeClicked})
  }

  msgReadToggle = (e, id) => {
    const messages = this.state.messageData
    const newMessages = messages.map((message) => {
        if (message.id == id) {message.read = true}
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

  toggleSelected = (event, messageId) =>{
    const selected = this.state.messageData.selected
    const selectedMessages = this.state.messageData.map((message) => {
      if (message.id == messageId) {
        message.selected = !message.selected
      }
      return message
    })
    this.setState({messageData: selectedMessages})
  }

  selectDeselectAll = (event) =>{

  }


  onMessageSent = (object) => {
    fetch("http://localhost:8082/api/messages", {
      method: 'POST',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(object)
    })
      .then(response => response.json())
      .then(newMessage =>{
        this.setState({
          messageData: this.state.messageData.concat(newMessage)
        })
      })
      this.setState({composeClicked: false})
  }

  findSelected = () => {

    let messages = this.state.messageData.reduce((acc,current) =>{
      if(current.selected){
        acc.push(current.id)
        return acc
      }
      else{ return acc}
    }, []);
      console.log("selected messages",messages)
      return messages
  }

  onDelete = (event) => {
    let selectedMsgs = this.findSelected()
    fetch("http://localhost:8082/api/messages", {
      method: 'PATCH',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({
        messageIds: selectedMsgs,
        command:"delete"
      })
    })
    .then(response => response.json())
    .then(newMessages =>{
      this.setState({
        messageData: newMessages
      })
    })
  }


  onMarkAsRead = (event) =>{
    let selectedMsgs = this.findSelected()
    fetch("http://localhost:8082/api/messages", {
      method: 'PATCH',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({
        messageIds: selectedMsgs,
        command: 'read',
        read: true
      })
    })
    .then(response => response.json())
    .then(readMessages => {
      this.setState({
        messageData: readMessages
      })
    })
  }


  onMarkasUnread = (event) =>{
    let selectedMsgs = this.findSelected()
    fetch("http://localhost:8082/api/messages", {
      method: 'PATCH',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({
        messageIds: selectedMsgs,
        command: 'read',
        read: false
      })
    })
    .then(response => response.json())
    .then(readMessages => {
      this.setState({
        messageData: readMessages
      })
    })
  }

  render() {

    return (
      <div className="App">
        <Toolbar
        composeClicked = {this.state.composeClicked}
        composeToggle = {this.composeToggle}
        onDelete= {this.onDelete}
        onMarkAsRead= {this.onMarkAsRead}
        onMarkasUnread={this.onMarkasUnread}
        messageData={this.state.messageData}
        />
        {this.composeMessage()}
        <MessageList toggleStarred={this.toggleStarred}
                    messageData={this.state.messageData}
                    msgReadToggle={this.msgReadToggle}
                    toggleSelected={this.toggleSelected}
                    />
      </div>
    );
  }
}

export default App;
