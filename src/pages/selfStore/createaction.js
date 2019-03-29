export const add = function (state,params) {
  const result = {...state,age:state.age+1}
  // console.log(result)
  return result
}
export const changename = function(state,params){
  return {
    ...state,
    name:state.name+params
  }
}