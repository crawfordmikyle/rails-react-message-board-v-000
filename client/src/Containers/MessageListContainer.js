import React, {Component} from 'react'
import {connect} from 'react-redux'
import MessageList from '../Components/MessageList'
import {getMessagesFromApi} from '../Actions/actions'
import {Route} from 'react-router-dom'
import Message from '../Components/Message'
class MessageListContainer extends Component{
  componentDidMount(){
    this.props.getMessagesFromApi()
  }
  render(){
    return(
      <div>
        <MessageList messages={this.props.messages}/>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return{messages: state.messagesReducer}
}

export default connect(mapStateToProps,{getMessagesFromApi})(MessageListContainer)