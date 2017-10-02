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

  render(){
    return(
      <div>
        <form>

        </form>
      </div>
    )
  }
}