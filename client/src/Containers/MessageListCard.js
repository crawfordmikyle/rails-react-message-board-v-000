import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class MessageListCard extends Component {
	constructor(){
  super();
	 this.state = {
    counter: 0,
   }
	}

  handleOnClick = () => {
    let newCount = this.state.counter + 1
    this.setState({
      counter: newCount,
    })
  }

  callApi = () => {
    console.log('a')
    fetch("/ai/messages")
      .then(responce => {
        if (responce.status == 200) {

          console.log('b', responce)

          return responce.json()
        } else {
          throw new Error(responce)
        }
      })
      .then(messages => console.log('c', messages))
      .catch(error => console.log('d',error))

      console.log('e')
  }

  render(){
    return(
      <div key={this.props.messageData.id} className="message">
        title:{this.props.messageData.title}
      <br/>
        <Link to={`/messages/${this.props.messageData.id}`} >See More</Link>
        <button onClick={this.handleOnClick}>Like</button>
        <p>Likes {this.state.counter}</p>
        <button onClick={this.callApi}>Call Api</button>
      </div>
    )
  }
}

export default MessageListCard