
export default function messagesReducer(state = [],action){
  switch(action.type){
    case 'GET_MESSAGES':
      return Object.assign([],state,action.payload)
    default:
      return state
  }
}