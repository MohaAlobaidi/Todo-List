import React, { Component } from 'react';
import  TodoItems from './component/TodoItems'
import Form from './component/Form'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  this.state={
    items:[
      {id:1,name:'mohammed',age:24},
      {id:2,name:'Ali',age:30}
    ]
  }
}


deleteItem = (id)=>{
  console.log(id)
  let items = this.state.items.filter(item => {
    return item.id !== id
  })
  this.setState({items:items})
}

addItem = (item)=>{
  item.id = Math.random()
let items = this.state.items
items.push(item)
this.setState({items:items})
}

render(){
  return (
    <div className="App container">
 <h1 className='text-center'> Todo List</h1>
  <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
  <Form addItem={this.addItem}/>
      </div>
  );
}
}

export default App;
