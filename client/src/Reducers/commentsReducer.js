export default function commentsReducer(state=[],action){
  switch(action.type){
    case 'GET_COMMENTS':
      return Object.assign([],state,action.comments)
    default:
      return state
  }
}