// Action Creators
const getMessages = (messages) => {
  return({
    type:'GET_MESSAGES',
    payload: messages,
  })
}

const addMessage = (message) => {
  return({
    type:'ADD_MESSAGE',
    message: message,
  })
}

const editMessage = (message) => {
  return({
    type: 'EDIT_MESSAGE',
    message: message,
  })
}

const deleteMessage = (message) => {
  return({
    type: 'DELETE_MESSAGE',
    message: message,
  })
}

// Comment Actions
const getComments = (comments) => {
  return({
    type: 'GET_COMMENTS',
    comments: comments,
  })
}

const addComment = (comment) => {
  return({
    type: 'ADD_COMMENT',
    comment: comment,
  })
}

// Message Like Actions

const addLikes = (message) => {
  return({
    type: 'ADD_LIKE',
    message: message,
  })
}

// Async Actions

// Message Like Async Actions

export const addLikeToMessageToApi = (messageObj) => {
    const messageUrl = `/api/messages/${messageObj.id}`
    console.log(messageUrl)
    return dispatch => {
      return fetch(messageUrl,{
        method: 'PUT',
        headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify({message: messageObj})
    })
    .then(responce => responce.json())
    .then(message => dispatch(addLikes(message)))
    .catch(error => console.log(error))
  }
}

//Comment Async Actions
export const getCommentsFromApi = (messageId) => {
  return dispatch => {
    return fetch(`/api/messages/${messageId}/comments`)
      .then(responce => responce.json())
      .then(comments => dispatch(getComments(comments)))
      .catch(error => console.log(error))
  }
}

export const addCommentToMessage = (comment,messageId) => {
  return dispatch => {
    return fetch(`/api/messages/${messageId}/comments`,{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({comment: comment})
    })
      .then(responce => responce.json())
      .then(comment => dispatch(addComment(comment)))
      .catch(error => console.log(error))
  }
}

// Message Async Actions
export const getMessagesFromApi = () => {
  return dispatch => {
    return fetch("/api/messages")
      .then(responce => responce.json())
      .then(messages => dispatch(getMessages(messages)))
      .catch(error => console.log(error))
  }
}

export const addMessagesToApi = (messageObj) => {
  return dispatch => {
    return fetch("/api/messages",{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({message: messageObj})
    })
    .then(responce => responce.json())
    .then(message => dispatch(addMessage(message)))
    .catch(error => console.log(error))
  }
}

export const editMessageToApi = (messageObj) => {
    const messageUrl = `/api/messages/${messageObj.id}`
    return dispatch => {
      return fetch(messageUrl,{
        method: 'PUT',
        headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify({message: messageObj})
    })
    .then(responce => responce.json())
    .then(message => dispatch(editMessage(message)))
    .catch(error => console.log(error))
  }
}

export const deleteMessageToApi = (messageObj) => {
    const messageUrl = `/api/messages/${messageObj.id}`
    console.log(messageUrl)
    return dispatch => {
      return fetch(messageUrl,{
        method: 'Delete',
        headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify({message: messageObj})
    })
    .then(responce => responce.json())
    .then(message => dispatch(deleteMessage(message)))
    .catch(error => console.log(error))
  }
}