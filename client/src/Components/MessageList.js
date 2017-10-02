import React from 'react'
import {Link, Route} from 'react-router-dom'
import Message from './Message'
import NewMessage from '../Containers/NewMessage'
import EditMessage from '../Containers/EditMessage'

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
      <Link to="/messages/new">New Message</Link>
      <Route exact path="/messages/new" component={NewMessage}/>
      <Route exact path="/messages/:id" component={Message}/>
      <Route exact path="/messages/:id/edit" component={EditMessage}/>
    </div>
  )
}

export default MessageList