import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

// This is our first component on React
// The code inside the return is not html but JSX
function App() {

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "xsdg4", name: "Zeno", age: 22 },
      { id: "dfce7", name: "Harry", age: 44 },
      { id: "htre8", name: "Filan", age: 24 }
    ],
  });

  const [otherState, setOtherState] = useState("some other value");
 // console.log(personsState, otherState);


    const nameChangedHandler = (event) => {
      setPersonsState({
        persons: [
          { name: "Zeno", age: 22 },
          { name: "HarryPotter", age: 25 },
          { name: event.target.value, age: 24 }
        ], 
      });
  } 

  const [showPersonsState, setShowPersonsState] = useState({showPersons: false});
  
  const deletePersonHandler = (personIndex) => {
      //const persons = personsState.persons.slice();
      const persons = [...personsState.persons]; //... spread operator It copies the array so u don't change the original one    
      persons.splice(personIndex, 1); //<-This removes one element from the array 1 i kallxojm qe 1 dojm me remove
      setPersonsState({persons: persons});
  }


  const togglePersonHandler = () => {
      const doesShow = showPersonsState.showPersons;
      setShowPersonsState({
         showPersons: !doesShow
      });     
  }

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer" 
  }

  let persons = null;
  if(showPersonsState.showPersons){
     persons = (
       <div>
        {personsState.persons.map((person, index) => { 
          return <Person 
          click={() => deletePersonHandler(index)} 
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={nameChangedHandler}
          /> 
        })}
       </div> 
    );     
 }

  return (    
    <div className="App">
      <h1>Hello Buddy</h1>
      <p>Testim</p>
      <button style={style} onClick={togglePersonHandler}>Toggle Persons</button>  
      {persons}   
    </div>
  );
}



export default App;


//Between these two -> { } you can write js expression or code

/* <Person name = "Zeno" age="22"/>
<Person name = "Harry" age="44"/>
<Person name = "Filan" age="24">My Hobbies: Biking</Person> */



// const [showPersonsState, setShowPersonsState] = useState({showPersons: false});

// const togglePersonHandler = () => {
//     const doesShow = showPersonsState.showPersons;
//     setShowPersonsState({
//        showPersons: !doesShow
//     });     
// }

// {showPersonsState.showPersons ? <div>etj</div> : null }


// const switchNameHandler = (newName) => {
//   setPersonsState({
//     persons: [
//       { name: newName, age: 22 },
//       { name: "HarryPotter", age: 25 },
//       { name: "FilanFisteku", age: 24 }
//     ],
//   });
// }