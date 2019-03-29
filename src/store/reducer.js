export const todo = function (state=[1],action) {
  switch (action.type) {
    case 'ADD':
      return [...state,action.text]
    default : return state
  }
}

export const manggo = function (state={name:'ck',age:18},action) {
  switch (action.type) {
    case 'MONGGOADDAGE':
      return {...state,age:state.age+1}
    default : return state
  }
}