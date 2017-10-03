import React from 'react'
import {connect} from 'react-redux'

const DeleteMessage = () => {
  return(
    <div>
      <form>
        Delete Message
      </form>
    </div>
  )
}


export default connect()(DeleteMessage)