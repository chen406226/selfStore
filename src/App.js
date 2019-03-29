import React, {useState, useEffect, Component ,PureComponent} from 'react';
import {Swtich, Route, HashHistory,BrowserRouter as Router, Link} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Todo from './pages/Todo'
import Manggo from './pages/Manggo';
// import store from './store/store'
import SelfStore from './pages/selfStore/Todo'


class Appss extends Component {
  constructor(){
    super();
    this.state = {
      a:1
    }

  }
  componentDidMount(){
    this.setState({a:3});
    console.log(this.state)
  }
  componentWillReceiveProps(){
    console.log('appreceiveprops')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/todo' >去Todo</Link>
          <Link to='/manggo' >去Manggo</Link>
          <Link to='/selfstore' >去selfStore</Link>

          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <Father></Father>
          <Apps></Apps>
        </header>
      </div>
    );
  }
}
function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });



  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    console.log('useEffect')
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    Child.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      Child.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

const state = {
  name:'ck',
  a:3
}
class Father extends Component {
  constructor (){
    super()
    this.state = {
      name:'ck',
    a:2
    }
  }

  Click = ()=>{
    this.setState({name:'mm'})
  }

  componentWillReceiveProps(){
    console.log('fatherreceiveprops')
  }
componentWillUpdate(){
  console.log('sdfsff')
}
  render(){
    console.log('sdf')
    return (<div>
      <Example></Example>
      {/* <Child sta={Math.random()} ck={'cks'}></Child> */}
      {/* <p>{this.state.name}</p> */}
      {/* <div>
        <span>FriendStatus</span>
        <FriendStatus friend={{id:2}}></FriendStatus>
      </div> */}
      <button onClick={()=>{this.setState({a:3})}}>点击</button>   
      <button onClick={this.Click}>改fat</button>
      <Child></Child>
    </div>)
  }
}

class Child extends PureComponent {
  constructor(){
    super()
    // this.state = {
    //   age:16
    // }
    console.log(this.props)
  }
  // static subscribeToFriendStatus(a,b){
  //   console.log(this,'this')
  //   console.log(a,b,'subscribetofriendStatus')
  //   Child.onTTT = (x,y)=>{
  //     console.log(a)
  //     const m=Math.random()
  //     b({isOnline:m>0.5})
  //   }
  // }

  // static unsubscribeFromFriendStatus(a,b){
  //   console.log(a,b,'unsubscribetofriendStatus')
  //   Child.onTT = (x,y)=>{
  //     console.log(a)
  //     b(true)
  //   }
  // }



  componentWillReceiveProps(p,n){
    console.log('Childreceiveprops',this.props,p)
    console.log(p==this.props,p,this.props)
  }
  componentDidMount(){
    // eslint-disable-next-line no-unused-vars
    let value = this.context
    console.log(this.deleteRow)
  }
  // shouldComponentUpdate(nexs,nexp){
  //   if (JSON.stringify(nexs) == JSON.stringify(nexp)) {
  //     console.log(JSON.stringify(nexs),nexp)
  //     return true
  //   }
  //   return false
  // }
  componentWillUpdate(){
    console.log('willupdate')
  }
  deleteRow(a,b){
    console.log(a,b)
  }
  render(){
    console.log('childkjl;ljrender')
    const id = 2;
    console.log(this.onTTT)
    // return (<div>child
    //   {/* <span>{this.props.sta}</span> */}
    //   <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
    //   <button onClick={()=>{Child.onTTT()}}>clicksubscribetofrien</button>
    //   </div>)
      return (<div>
        buhao
      </div>)
  }
}

Father.contextType = React.createContext({name:'ck'})


class Apps extends PureComponent {
  state = {
    items: [{a:1}, {a:2}, {a:3}]
  }
  handleClick = () => {
    const { items } = this.state;
    items.splice(items.length - 1, 1);
    this.setState({ items });
    console.log('click-Apps')

  }

  render() {
    console.log('Apps-render')
    return (<div>
      <ul>
        {this.state.items.map(i => <li key={i.a}>{i.a}</li>)}
      </ul>
      <button onClick={this.handleClick}>delete</button>
    </div>)
  }
}

class App extends Component{
  render(){
    return (<div>

    <Router>
      <Route exact path='/' component={Appss}/>
      <Route path='/todo' component={Todo}/>
      <Route path='/manggo' component={Manggo}/>
      <Route path='/selfstore' component={SelfStore}/>
    </Router> 
    </div>
    )
  }
}

export default App;
