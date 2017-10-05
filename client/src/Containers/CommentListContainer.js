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
        {this.props.comments.map((comment)=>{
          return(
            <div>
              {comment.comment_content}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state,ownProps) =>{
  return({
    comments: state.comments
  })
}

export default connect (mapStateToProps,{getCommentsFromApi})(CommentListContainer)