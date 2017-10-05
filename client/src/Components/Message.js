import React from 'react'
import {connect} from 'react-redux'
import {Link, Route, Switch} from 'react-router-dom'
import CommentListContainer from '../Containers/CommentListContainer'

const Message = ({message,match}) => {
  return(
    <div className="message">
      <h4>{message.title}</h4>
      <hr/>
      <p>{message.message_content}</p>
      <Link to={`/messages/${message.id}/edit`} className="button">Edit</Link>
      <Link to={`/messages/${message.id}/delete`} className="button">Delete Message</Link>
      <Link to={`/messages/${message.id}/comments`} className="button">Show Comments</Link>
      <Route exact path={`/messages/${message.id}/comments`} component={CommentListContainer}/>
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
