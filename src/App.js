import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

// This is our first component on React
// The code inside the return is not html but JSX
function App() {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Zeno", age: 22 },
      { name: "Harry", age: 44 },
      { name: "Filan", age: 24 }
    ],
  });

  const [otherState, setOtherState] = useState("some other value");
  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 22 },
        { name: "HarryPotter", age: 25 },
        { name: "FilanFisteku", age: 24 }
      ],
    });
  }
    const nameChangedHandler = (event) => {
      setPersonsState({
        persons: [
          { name: "Zeno", age: 22 },
          { name: "HarryPotter", age: 25 },
          { name: event.target.value, age: 24 }
        ],
      });
  }


  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer" 
  }

  return (
    <div className="App">
      <h1>Hello Buddy</h1>
      <p>Testim</p>
      <button style={style} onClick={() => switchNameHandler("ZenoSama")}>Switch name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, "OmniKing!")} />
      <Person 
      name = {personsState.persons[2].name} 
      age = {personsState.persons[2].age}
      changed = {nameChangedHandler}>My Hobbies: Biking</Person>
    </div>

  );
}



export default App;


/* <Person name = "Zeno" age="22"/>
<Person name = "Harry" age="44"/>
<Person name = "Filan" age="24">My Hobbies: Biking</Person> */