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
      <div>
        <MessageList messages={this.props.messages}/>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  return{messages: state.messages}
}

export default connect(mapStateToProps,{getMessagesFromApi})(MessageListContainer)