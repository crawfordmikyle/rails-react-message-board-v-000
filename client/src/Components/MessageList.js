import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Message from './Message'
import NewMessage from '../Containers/NewMessage'
import MessageListCard from '../Containers/MessageListCard'

const MessageList = ({messages,match}) =>{
  const renderedMessages = messages.map((message)=>{
    return(
      <MessageListCard messageData={message} key={message.id}/>
    )
  })
  return(
    <div>
      <h4>Messages</h4>
      <div>
      {renderedMessages}
      </div>
      <Link to="/messages/new">New Message</Link>
      <Switch>
        <Route exact path="/messages/new" component={NewMessage}/>
        <Route path="/messages/:id" component={Message}/>
      </Switch>
    </div>
  )
}

export default MessageList