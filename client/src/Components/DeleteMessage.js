import React from 'react'
import {connect} from 'react-redux'

const DeleteMessage = ({message}) => {
  return(
    <div>
      <h4>Delete Message</h4>
      <h5>Are You Sure?</h5>
      <form>
      </form>
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

export default connect(mapStateToProps)(DeleteMessage)