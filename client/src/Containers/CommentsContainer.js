import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMessageComments} from '../Actions/actions'
class CommentsContainer extends Component {


  render(){
    return(
      <div className="comments">
        <h4>Comments</h4>
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) => {
  console.log(state)
  console.log(ownProps)
}

export default connect(mapStateToProps,{getMessageComments})(CommentsContainer)