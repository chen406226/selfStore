import {createStore, combineReducers} from 'redux'
import * as todoApp from './reducer'
// console.log(Object.keys(todoApp))
// console.log(combineReducers(todoApp),'combinReducers')
export default createStore(combineReducers(todoApp))

