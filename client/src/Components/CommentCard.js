import React from 'react'

const CommentCard = ({comment}) => {
  return(
    <div key={comment.id} className="message">
      <p>comment:</p>
      <hr/>
      {comment.comment_content}
    </div>
  )
}

export default CommentCard