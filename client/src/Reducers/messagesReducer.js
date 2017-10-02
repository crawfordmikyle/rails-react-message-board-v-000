
export default function messagesReducer(state = [],action){
  switch(action.type){
    case 'GET_MESSAGES':
      return Object.assign([],state,action.payload)
    case 'ADD_MESSAGE':
      return state.concat(action.message)
    default:
      return state
  }
}