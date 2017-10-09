import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getCommentsFromApi} from '../Actions/actions'
import CommentCard from '../Components/CommentCard'
import NewComment from './NewComment'

class CommentListContainer extends Component{

  componentDidMount(){
    this.props.getCommentsFromApi(this.props.msgId)
  }

  render(){
    return(
      <div>
        <NewComment msgId={this.props.msgId}/>
        {this.props.comments.map((comment)=>{
          return(
            <CommentCard comment={comment} key={comment.id}/>
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