import React,{Component} from 'react'
import { connect } from "react-redux";
import {addTodo}from '../store/action'
import TodoChild from './TodoChild'
import {ThemeContext} from './createcontext'


class Todo extends Component {
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
    const {todo} = this.props.store
    return (<div>
      <p>{this.props.store.manggo.age}</p>
      
      nihaslk;jfd
      <button onClick={this.props.onAdd}>点击</button>
      {
        todo.map((item,index)=>{
          return <p key={index}>{item}</p>
        })
      }  
      <ThemeContext.Provider value={this.state}>
      <Too></Too>
      </ThemeContext.Provider>
      {/* <TodoChild></TodoChild> */}
    </div>)
  }
}

function Too(props){
  return (<div>
      <TodoChild></TodoChild>
  </div>)
}

class TodoChilds extends Component {
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

// TodoChild = connect((store)=>{
//   return {store}
// })(TodoChild)



Todo = connect((store)=>{
  return {store}
},(dispatch)=>{
  return {
    onAdd:(text)=>{
      dispatch(addTodo('你好'))
    }
  }
})(Todo)
export default Todo



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
// console.log(is({},{}))