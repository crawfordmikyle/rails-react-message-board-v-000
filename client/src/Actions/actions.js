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

const getComments = (comments) => {
  return({
    type: 'GET_COMMENTS'
    comments: comments
  })
}

// Async Actions

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