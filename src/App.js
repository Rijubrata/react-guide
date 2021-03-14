import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    Person:[
      {name:'Riju',age:28},
      {name:'Manu',age:30},
      {name:'Suv',age:26}
    ],
    otherState:'Do not change'
  }
  switchNameHandler=()=>{
   // this.state.Person[0].name='Rijubrata';
   // console.log('cliked');
   this.setState({
    Person:[
      {name:'Rijubrata',age:28},
      {name:'Manu',age:30},
      {name:'Suv',age:35}
    ]
   });
  }
  render() {
    return (
      <div className="App">
       <h1>Hello, I am react app!</h1>
       <button onClick={this.switchNameHandler}>Switch Name!</button>
       <Person name={this.state.Person[0].name} age={this.state.Person[0].age}/>
       <Person name={this.state.Person[1].name} age={this.state.Person[1].age}>My hobbies:Racing</Person>
       <Person name={this.state.Person[2].name}  age={this.state.Person[2].age} />
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello, I am react app!'));
  }
}

export default App;
