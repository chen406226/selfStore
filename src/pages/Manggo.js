import React,{Component} from 'react'
import {Provider, connect } from "react-redux";
import {monggoAddAge}from '../store/action'

import store from '../store/store'
export default class Manggo extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state={
      a:2,
      b:3,
      onClick:this.onClick //可以把事件和值都传进context达到操作context的目的
    }
  }

  onClick = ()=>{
    this.setState({b:this.state.b+1})
  }

  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return (<Provider store={store}>
      <Too></Too>
    </Provider>)
  }
}

function Too(props){
  return (<div>
      <TodoChild></TodoChild>
  </div>)
}

class TodoChild extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'ck'
    }
  }

  render(){
    return (<div>
      TodoChild
      <p>{this.props.store.manggo.name}</p>
      <p>{this.props.store.manggo.age}</p>
      <button onClick={this.props.addAge}>age+1</button>
    </div>)
  }
}

TodoChild = connect((store)=>{
  return {store}
},(dispatch)=>{
  return {
    addAge:()=>{dispatch(monggoAddAge())}
  }
})(TodoChild)



// Todo = connect((store)=>{
//   return {store}
// },(dispatch)=>{
//   return {
//     onAdd:(text)=>{
//       dispatch(addTodo('你好'))
//     }
//   }
// })(Todo)
// export default Todo



function shallowEqual(a,b) {
  if (is(a,b)) {
    return true
  }  
  //如果是引用类型进行下面比较
  //由上判断出两值不相同 在判断是否为对象 因为对象键值可能相同引用可能不同
  if (
    typeof a !== 'object' ||
    a ===null ||
    typeof b !== 'object' ||
    b ===null
  ) {
    return false;    
  }

  const keysA = Object.keys(a)
  const keysB = Object.keys(b)
  if (keysA.length !== keysB.length) {
    return false;
  }
  //Test for A's keys different from B
  for (let i = 0; i < keysA.length; i++) {
    if (
      !Object.hasOwnProperty.call(b,keysA[i]) ||
      !is(a[keysA[i]],b[keysA[i]])
    ) {
      return false
    }
    
  }

  return true;

}
function is(x,y) {
  //前面为x和y都为0的情况
  //第一种特殊情况+0 ===-0是true所以做被除数来判断
  //第二种特殊情况为NaN x,y都不为NaN
  // eslint-disable-next-line no-self-compare
  return (x===y&&(x!==0||1/x===1/y))||(x!==x&&y!==y)
}