import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import DeleteMessage from './DeleteMessage'

const Message = ({message,match}) => {
  return(
    <div className="message">
      <h4>{message.title}</h4>
      <hr/>
      <p>{message.message_content}</p>
      <Link to={`/messages/${message.id}/edit`}>Edit</Link>
      <DeleteMessage/>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const message = state.messages.find((m)=>(m.id.toString() === ownProps.match.params.id))
  if(message){
    return {message}
  }
  else{
    return {message: {}}
  }
}


export default connect(mapStateToProps)(Message);
