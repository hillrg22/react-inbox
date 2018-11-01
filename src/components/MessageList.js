import React from 'react'
import Message from './Message'


const MessageList = ({messageData, toggleStarred, msgReadToggle, toggleSelected}) => {
  const messageComponents = messageData.map(message =>{
    return <Message key={message.id}
          id={message.id}
          labels={message.labels}
          read={message.read}
          selected={message.selected}
          starred={message.starred}
          subject={message.subject}
          toggleStarred={toggleStarred}
          msgReadToggle={msgReadToggle}
          toggleSelected={toggleSelected}
          />
  })

  return (
    <div>
      {messageComponents}
    </div>
  )
}


export default MessageList
