import React from 'react'
import {Link} from 'react-router-dom'

const MessageListCard = ({messageData}) => {
  return(
   <div key={messageData.id} className="message">
      title:{messageData.title}
      <br/>
      <Link to={`/messages/${messageData.id}`} >See More</Link>
    </div>
  )
}

export default MessageListCard
