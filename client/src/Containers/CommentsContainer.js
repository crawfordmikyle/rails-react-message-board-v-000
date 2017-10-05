import React, {Component} from 'react'
import {connect} from 'react-redux '

class CommentsContainer extends Component {
  constructor(){
    super();
  }

  render(){
    return{
      <div className="comments">
        <h4>Comments</h4>
      </div>
    }
  }
}

export default CommentsContainer