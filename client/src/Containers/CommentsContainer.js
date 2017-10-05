import React, {Component} from 'react'
import {connect} from 'react-redux'

class CommentsContainer extends Component {
  constructor({msgID}){
    super();
  }

  componentDidMount(){
    console.log(this.props)
  }

  render(){
    return(
      <div className="comments">
        <h4>Comments</h4>
      </div>
    )
  }
}

export default CommentsContainer