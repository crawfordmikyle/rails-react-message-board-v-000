export default function commentsReducer(state=[],action){
  switch(action.type){
    case 'GET_COMMENTS':
      return Object.assign([],state,action.comments)
    case 'ADD_COMMENT':
      debugger
      return state.concat(action.comment)
    default:
      return state
  }
}