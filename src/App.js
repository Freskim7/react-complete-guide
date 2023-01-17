import { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

// This is our first component on React
// The code inside the return is not html but JSX
function App() {

 const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Zeno", age: 22},
      {name: "Harry", age: 44},
      {name: "Filan", age: 24}
    ],
    otherState: "some other value"
});

const switchNameHandler = () => {
    setPersonsState ({
      persons: [
        {name: "ZenoSama", age: 22},
        {name: "HarryPotter", age: 25},
        {name: "FilanFisteku", age: 24}
      ],
    });

}

  return (
    <div className="App">
      <h1>Hello Buddy</h1>
      <p>Testim</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name = {personsState.persons[0].name} age ={personsState.persons[0].age}/>
      <Person name = {personsState.persons[1].name} age={personsState.persons[1].age}/>
      <Person name = {personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Biking</Person>
    </div>
    
  );
}

export default App;


{/* <Person name = "Zeno" age="22"/>
<Person name = "Harry" age="44"/>
<Person name = "Filan" age="24">My Hobbies: Biking</Person> */}