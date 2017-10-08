import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getCommentsFromApi,addCommentToMessage} from '../Actions/actions'
import CommentCard from '../Components/CommentCard'
import NewComment from './NewComment'

class CommentListContainer extends Component{
  constructor(){
    super();
    this.state = {
      comment_content: ''
    }
  }

  componentDidMount(){
    this.props.getCommentsFromApi(this.props.msgId)
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCommentToMessage(this.state,this.props.msgId)
  }

  render(){
    return(
      <div>
        <NewComment msgId={this.props.msgId}/>
        {this.props.comments.map((comment)=>{
          return(
            <CommentCard comment={comment}/>
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

export default connect (mapStateToProps,{getCommentsFromApi,addCommentToMessage})(CommentListContainer)