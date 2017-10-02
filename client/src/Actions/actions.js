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