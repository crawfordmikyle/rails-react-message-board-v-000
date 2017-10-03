
export default function messagesReducer(state = [],action){
  switch(action.type){
    case 'GET_MESSAGES':
      return Object.assign([],state,action.payload)
    case 'ADD_MESSAGE':
      return state.concat(action.message)
    case 'EDIT_MESSAGE':
      return state.map((m)=>{
        if(m.id === action.message.id){
          return action.message
        }else{
          return m
        }
      })
    default:
      return state
  }
}