import React, {Component} from 'react'
import {connect} from 'react-redux'

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

  }

  render(){
    return(
      <div>
        <form>
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

export default NewMessage