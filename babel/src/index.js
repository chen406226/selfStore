import React,{Component} from 'react'
const Contexts = React.createContext()

var result

function doaction(inward,change,s){
  return async function(){
    if (result === undefined) {
      result = await inward(s,...arguments)
    }else{
      result = await inward(result,...arguments)
    }
    change({...result})
  }
}

function create(store,actions,Com){

  return class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        ...store
      }
    }

    doSet = (m)=>{
      this.setState(m)
    }

    componentDidMount(){
      for (const key in actions) {
          const ac = actions[key].bind(this)   
          this.setState({
            [key]:doaction(ac,this.doSet,this.state)
          })
      }
    }  
    render(){
      return (<Contexts.Provider value={this.state}>
        <Com></Com>
      </Contexts.Provider>)
    }
    
  }
}
function connect(Com){
  return class App extends Component {
    static contextType = Contexts;
    render(){
      const store = this.context
      return (<Com {...store} ></Com>)
    }
  }
}
export {connect,create}
// export default {
//   create,
//   connect
// }