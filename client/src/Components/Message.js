import React from 'react'
import {connect} from 'react-redux'
import {Link,Route} from 'react-router-dom'

const Message = ({message,match}) => {
  console.log(message)
  return(
    <div className="message">
      <h4>{message.title}</h4>
      <hr/>
      <p>{message.message_content}</p>
      <Link to={`/messages/${message.id}/edit`}>Edit</Link>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const message = state.messagesReducer.find((m)=>m.id == ownProps.match.params.id)
  if(message){
    return {message}
  }
  else{
    return {message: {}}
  }
}


export default connect(mapStateToProps)(Message);
