import React,{Component} from 'react'
import { connect } from "react-redux";
import {addTodo}from '../store/action'

import {ThemeContext} from './createcontext'

export default class TodoChild extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'ck'
    }
  }
  static contextType = ThemeContext
  componentDidMount(){
    console.log(this,this.context)
  }
  componentWillUpdate(){
    console.log('childupdate')
  }

  componentWillReceiveProps(np,ns){
    console.log(np,ns,'np---ns')
    console.log(np==this.props)
  }
  shouldComponentUpdate(np,ns){
    console.log(np,ns,'np---ns')
    return true
  }
  render(){
    console.log('TOdoChild')
    const {a,b,onClick} = this.context
    return (<div>
      TodoChild
      <p>context内容</p>
      <p>{b}</p>
      <button onClick={onClick}>点击改变context值</button>
    </div>)
  }
}