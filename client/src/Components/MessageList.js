import React from 'react'
import {Link, Route} from 'react-router-dom'
import Message from './Message'
const MessageList = ({messages,match}) =>{
  const renderedMessages = messages.map((message)=>{
    return(
      <li key={message.id}>
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
      <Route path="/messages/:id" component={Message}/>
    </div>
  )
}

export default MessageList