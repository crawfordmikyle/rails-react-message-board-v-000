import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addLikeToMessageToApi} from '../Actions/actions'

class MessageListCard extends Component {

  handleOnClick = () => {
    this.props.addLikeToMessageToApi(this.props.message)
  }

  render(){
    return(
      <div key={this.props.message.id} className="message">
        title:{this.props.message.title}
      <br/>
        <Link to={`/messages/${this.props.message.id}`} >See More</Link>
        <br/>
        <button onClick={this.handleOnClick}>Like</button>
        <br/>
        <p>Likes {this.props.message.likes}</p>
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