import React from 'react'
import {connect} from 'react-redux'
import {getMessagesFromApi} from '../Actions/actions'

const MessageList = (props) =>{
  return(
    <div>
      <h4>Messages</h4>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{messages: state.messagesReducer}
}

export default connect(mapStateToProps,{getMessagesFromApi})(MessageList)