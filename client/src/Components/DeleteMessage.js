import React from 'react'
import {connect} from 'react-redux'
import {deleteMessageToApi} from '../Actions/actions'

const DeleteMessage = ({message, deleteMessageToApi}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteMessageToApi(message)
  }

  return(
    <div>
      <h4>Delete Message</h4>
      <h5>Are You Sure?</h5>
      <form onSubmit={(event)=>handleSubmit(event)}>
        <input type="submit" value="Delete Message"/>
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

export default connect(mapStateToProps,{deleteMessageToApi})(DeleteMessage)