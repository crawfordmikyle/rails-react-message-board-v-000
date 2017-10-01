import React from 'react'
const MessageList = ({messages}) =>{
  const renderedMessages = messages.map((message)=>{
    return(
      <li>{message.title}</li>
    )
  })
  return(
    <div>
      <h4>Messages</h4>
      <ul>
      {renderedMessages}
      </ul>
    </div>
  )
}

export default MessageList