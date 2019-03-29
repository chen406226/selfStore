import * as CONST from './consts.js'
export function addTodo(text) {
  return {
    type:CONST.ADD,
    text
  }
}
export function monggoAddAge(text) {
  return {
    type:CONST.MONGGOADDAGE,
    text
  }
}