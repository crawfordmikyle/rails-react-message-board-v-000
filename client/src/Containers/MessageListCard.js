import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addLikeToMessageToApi} from '../Actions/actions'

class MessageListCard extends Component {
	constructor({message}){
  super();
	this.state = {
    id: message.id,
    user_id: message.user_id,
    title: message.title,
    message_content: message.message_content,
    likes: message.likes,
    }
	}

  handleOnClick = () => {
    let newCount = this.state.likes + 1
    this.setState({
      likes: newCount,
    },function(){
      this.props.addLikeToMessageToApi(this.state)
    })
  }

  render(){
    return(
      <div key={this.props.messageData.id} className="message">
        title:{this.props.messageData.title}
      <br/>
        <Link to={`/messages/${this.props.messageData.id}`} >See More</Link>
        <button onClick={this.handleOnClick}>Like</button>
        <p>Likes {this.state.likes}</p>
        <button onClick={this.callApi}>Call Api</button>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  
  const message = state.messages.find((m)=>(m.id) === ownProps.messageData.id)
  if(message){
    return {message: message}
  }
  else{
    return {message: {}}
  }
}

export default connect(mapStateToProps,{addLikeToMessageToApi})(MessageListCard)