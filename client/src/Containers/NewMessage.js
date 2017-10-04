import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addMessagesToApi} from '../Actions/actions'
class NewMessage extends Component {
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
    this.props.history.push('/messages')
  }

  render(){
    return(
      <div className="row form-container">
          <form onSubmit={(event)=>this.handleOnSubmit(event)}>
            <label>Name:</label>
            <input type="text" id="user_name" value={this.state.user_name} onChange={(event)=>this.handleOnChange(event)}/>
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

const mapStateToProps = (state) =>({
  messages: state.messages
})

export default connect(mapStateToProps,{addMessagesToApi})(NewMessage)