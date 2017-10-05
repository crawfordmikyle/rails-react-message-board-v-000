import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getCommentsFromApi } from '../Actions/actions'

class CommentListContainer extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.getCommentsFromApi(this.props.msgId)
  }

  render(){
    return(
      <div>
        The Comment Stuff Goes Here
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) =>{
  console.log(state,ownProps)
}

export default connect (null,{getCommentsFromApi})(CommentListContainer)