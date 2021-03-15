import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';
import Radium, { StyleRoot } from 'radium';

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.Person.length <= 2) {
      classes.push('red');
    }
    if (this.state.Person.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App" >
          <h1>Hello, I am react app!</h1>
          <p className={classes.join(' ')}>This works</p>
          <button style={style} onClick={this.togglePersonHandler}>Switch Name!</button>
          {persons}
        </div >
      </StyleRoot>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello, I am react app!'));
  }
}

export default Radium(App);
