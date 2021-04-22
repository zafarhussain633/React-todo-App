import React, { Component } from 'react';
import {Cardlist} from "./components/card-list/card-list.component"
import './App.css';

// class components
class App extends Component{
 constructor(){
   super()
   this.state={
    monster:[]
   }

 }// end of constructor
 componentDidMount(){
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(res=>res.json())
   .then(res=>this.setState({monster:res}))
 }
 
render(){
    return(
    <div>
    <Cardlist name="zafar">
    {this.state.monster.map(result=>(
      <h2 key={result.id}>{result.name}</h2>
    ))}
    </Cardlist>
    </div>
    )
}
}


//fucntional coponents
function Welcome(props) {
  return <h1>{props.input}</h1>
}

export  {App , Welcome};
