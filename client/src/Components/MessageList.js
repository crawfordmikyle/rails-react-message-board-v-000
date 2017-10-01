import React from 'react'
import {Link} from 'react-router-dom'
const MessageList = ({messages}) =>{
  const renderedMessages = messages.map((message)=>{
    return(
      <li>
      title:{message.title}
      <Link to={`/messages/${message.id}`} >See More</Link>
      </li>
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