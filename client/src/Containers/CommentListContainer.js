import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getCommentsFromApi} from '../Actions/actions'

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

  }

  render(){
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <h4>Comment</h4>
          <input id="comment_content" type="text" value={this.state.comment_content} onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit"/>
        </form>
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