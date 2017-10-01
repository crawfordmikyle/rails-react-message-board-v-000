export default function messagesReducer(state = [],action){
  switch(action.type){
    case 'GET_TWEETS':
      return Object.assign([],state,action.payload)
    default:
      return state
  }
}