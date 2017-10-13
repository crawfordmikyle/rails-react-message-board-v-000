import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addCommentToMessage} from '../Actions/actions'

class NewComment extends Component {
  constructor(){
    super();
    this.state = {
      comment_content: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCommentToMessage(this.state,this.props.msgId)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} className="message">
          <h4>Comment</h4>
          <input id="comment_content" type="text" value={this.state.comment_content} onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null,{addCommentToMessage})(NewComment)