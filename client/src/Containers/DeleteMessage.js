import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteMessageToApi} from '../Actions/actions'

class DeleteMessage extends Component {
  constructor({message}){
    super();
  }

  handleSubmit = (event) => {
    debugger
    event.preventDefault();
    this.props.deleteMessageToApi(this.props.message)
  }

  render(){
    return(
      <div>
        <h4>Delete Message</h4>
        <h5>Are You Sure?</h5>
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input type="submit" value="Delete Message"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const message = state.messages.find((m)=>(m.id.toString() === ownProps.match.params.id))
  if(message){
    return {message}
  }
  else{
    return {message: {}}
  }
}

export default connect(mapStateToProps,{deleteMessageToApi})(DeleteMessage)