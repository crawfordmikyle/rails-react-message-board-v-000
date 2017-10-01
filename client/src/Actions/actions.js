// Action Creators
const getMessages = (messages) => {
  return({
    type:'GET_MESSAGES',
    payload: messages,
  })
}
// Async Actions

export const getMessagesFromApi = () => {
  return fetch("/api/messages")
    .then(responce => responce.json())
    .then(messages => dispatch(getMessages(messages)))
    .catch(error => console.log(error))
}