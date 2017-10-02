import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Message = ({message}) => {
  console.log(message)
  return(
    <div className="message">
      <h1>{message.title}</h1>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const message = state.messagesReducer.find((m)=>m.id == ownProps.match.params.id)
  return({
    message
  })
}


export default connect(mapStateToProps)(Message);
