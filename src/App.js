import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
  state = {
    Person: [
      { id: 1, name: 'Riju', age: 28 },
      { id: 2, name: 'Manu', age: 30 },
      { id: 3, name: 'Suv', age: 26 }
    ],
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.Person];
    persons.splice(personIndex, 1);
    this.setState({ Person: persons });

  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.Person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.Person[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.Person];
    persons[personIndex] = person;

    this.setState({ Person: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  render() {

    const style = {
      backgroudColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        < div >
          {
            this.state.Person.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}>
              </Person>
            })
          }
        </ div >
      );
    }

    return (
      <div className="App" >
        <h1>Hello, I am react app!</h1>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name!</button>
        { persons}
      </div >
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello, I am react app!'));
  }
}

export default App;
