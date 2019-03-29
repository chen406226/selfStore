import React, { Component } from 'react'
import {create,connect} from '../../createredux/index'
// import Sto from '../../createredux/index'
// import Sto from 'ckstore'
// import {create,connect} from 'ckstore'
import store from './createstore'
import * as action from './createaction'

const Contextss = React.createContext()

class Todo extends Component {
  render() {
    return (
      <div>
        父组件
        <TodoChild></TodoChild>
        <hr/>
        {/* <Todos></Todos> */}
        <Contextss.Provider value={'ck'}>
        <Todos></Todos>
      </Contextss.Provider>
      </div>
    )
  }
}

class Todos extends Component {
  render() {
    return (
      <div>
        父组件todos
        <TodosChild></TodosChild>

      </div>
    )
  }
}
Todos = create(store,action,Todos)
console.log(Todos)
class TodosChild extends Component {
  render() {
    return (<div>
      <p>子组件</p>
      <p>{this.props.age}</p>
      <button onClick={this.props.add}>sdfasf</button>
      <p>{this.props.name}</p>
      <button onClick={()=>{this.props.changename('k')}}>changename</button>
    </div>)
  }
}
TodosChild = connect(TodosChild)



class TodoChild extends Component {
  render() {
    return (<div>
      <p>子组件</p>
      <p>{this.props.age}</p>
      <button onClick={this.props.add}>+++++++++</button>
      <p>{this.props.name}</p>
      <button onClick={()=>{this.props.changename('k')}}>changename</button>
      <TodoChilds></TodoChilds>
    </div>)
  }
}
TodoChild = connect(TodoChild)


class TodoChilds extends Component {
  render() {
    return (<div>
      <p>子组件</p>
      <p>{this.props.age}</p>
      <button onClick={this.props.add}>+++++++++</button>
      <p>{this.props.name}</p>
      <button onClick={()=>{this.props.changename('k')}}>changename</button>
    </div>)
  }
}
TodoChilds = connect(TodoChilds)



export default create(store,action,Todo)
// export default Todo