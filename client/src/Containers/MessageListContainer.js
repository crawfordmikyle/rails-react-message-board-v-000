import React, {Component} from 'react'
import {connect} from 'react-redux'
import MessageList from '../Components/MessageList'
import {getMessagesFromApi} from '../Actions/actions'

class MessageListContainer extends Component{
  componentDidMount(){
    this.props.getMessagesFromApi()
  }
  render(){
    return(
      <MessageList/>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return{messages: state.messagesReducer}
}

export default connect(mapStateToProps,{getMessagesFromApi})(MessageListContainer)