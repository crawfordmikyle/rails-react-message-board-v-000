import React, {Component} from 'react'
import {connect} from 'react-redux'
class EditMessage extends Component {
  constructor({match,message}){
    super();
    this.state={
      title: '',
      message_content: '',
    }
  }

  componentDidMount(){
    console.log(this.props.message)
    debugger
    this.setState({
      title: this.props.message.title,
      message_content: this.props.message.message_content,
    })
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
          <input type="text" id="title" value={this.state.title} onChange={(event)=>this.handleOnChange(event)}/>
          <br/>
          <label>Message:</label>
          <textarea id="message_content" value={this.state.message_content} onChange={(event)=>this.handleOnChange(event)}></textarea>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const message = state.messagesReducer.find((message)=>(message.id == ownProps.match.params.id))
  console.log(message)
  if(message){
    return {message: message}
  }
  else{
    return {message: {}}
  }
}

export default connect(mapStateToProps)(EditMessage)