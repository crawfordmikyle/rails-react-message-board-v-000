import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editMessageToApi} from '../Actions/actions'

class EditMessage extends Component {
  constructor({message}){
    super();
    this.state={
      id: message.id,
      user_id: message.user_id,
      title: message.title,
      message_content: message.message_content,
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  componentDidMount(){
    console.log(this.props.message)
  }

  handleOnSubmit = (event) =>{
    event.preventDefault();
    this.props.editMessageToApi(this.state)
    this.setState({
      id: '',
      user_id: '',
      title: '',
      message_content: '',
    })
    this.props.history.push('/messages')
  }

  render(){
    return(
      <div className="row message">
        <h4>Edit Message</h4>
        <form onSubmit={(event)=>this.handleOnSubmit(event)}>
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
  const message = state.messages.find((message)=>(message.id.toString() === ownProps.match.params.id))
  if(message){
    return {message: message}
  }
  else{
    return {message: {}}
  }
}

export default connect(mapStateToProps,{editMessageToApi})(EditMessage)