import React from 'react'
import Message from './Message'
const MessageList = ({messageData}) => {
  return messageData.map(item => {
    return(
    <div>
      <div className="row message unread">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a href="#">
            {item.subject}
          </a>
        </div>
      </div>
        <Message messageData={messageData} />
  </div>
  )
})
}

export default MessageList
