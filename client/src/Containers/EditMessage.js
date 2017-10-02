import React, {Component} from 'react'
import {connect} from 'react-redux'
class EditMessage extends Component {
  constructor(){
    super();
    this.state={
      user_name: '',
      title: '',
      message_content: '',
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  handleOnSubmit = (event) =>{
    event.preventDefault();
    this.props.addMessagesToApi(this.state)
    this.setState({
      user_name: '',
      title: '',
      message_content: '',
    })
  }

  render(){
    return(
      <div>
        <h4>Edit Message</h4>
        <form onSubmit={(event)=>this.handleOnSubmit(event)}>
          <label>Name:</label>
          <input type="text" id="user_name" onChange={(event)=>this.handleOnChange(event)}/>
          <br/>
          <label>Title:</label>
          <input type="text" id="title" onChange={(event)=>this.handleOnChange(event)}/>
          <br/>
          <label>Message:</label>
          <textarea id="message_content" onChange={(event)=>this.handleOnChange(event)}></textarea>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
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

export default connect(mapStateToProps)(EditMessage)