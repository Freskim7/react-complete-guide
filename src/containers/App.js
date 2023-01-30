import { useState } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

//App e menaxhon state edhe e manipulon ato using functions
//app.js component is a Container component cuz it also manages state
//everything inside these {} is javaScript 

// This is our first component on React
// The code inside the return is not html but JSX
function App() {

  const [personsState, setPersonsState] = useState({
    persons: [ 
      { id: "xsdg4", name: "Zeno", age: 22 }, //<- qeky element/person ne array osht a javaScript Object
      { id: "dfce7", name: "Harry", age: 44 },
      { id: "htre8", name: "Filan", age: 24 },
    ],
  });
  
 // const [otherState, setOtherState] = useState("some other value");
 // console.log(personsState, otherState);

    const nameChangedHandler = (event, id) => {
      //ktu jem ka e marrim indexin e elementit te cilin jem ka veprojm duke i krahasu id-jat, nese jon t njejta
      //jepma indexin e qeti elementi edhe ruma, findIndex e ekzekuton qat function in every element in the array edhe na kthen indexin e tij 
      const personIndex = personsState.persons.findIndex(p => {
            return p.id === id;
          });
     
      //ktu e marrim qat element apo person ne baz te indexin qe e kem marr ma nalt
      //{...} it works edhe per objects it will get all the properties of the object
      // and it will create a new object me qato parametra 
      const person = {...personsState.persons[personIndex]}

      //ktu jem ka e ndryshojm emrin e personit n baz vleres qe i jem jep n input
      person.name = event.target.value;//we get the value the user entered n input aty

      //ktu pe krijojna nje copy array t personav edhe tana pe shtojna qat objekt qe e kem ndryshu ne array
      //ne baz te indexit qe e kem marr
      const persons = [...personsState.persons];
      persons[personIndex] = person;

      //ktu tana veq pe ndryshojna array origjinale me arrayn e updatume qe e kem
      setPersonsState({persons: persons});
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

  let persons = null;
  if(showPersonsState.showPersons){
    
    persons = (  //(); this is just so we can write ma shume se 1 rresht kod 
                
        <Persons 
        persons={personsState.persons}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}/> 
       
    );   
 }

  return (    
      //This part is called the Cockpit component elm mrena div without persons me i shti si component n veti e me i thirr tana veq n app
    <div className="App"> 
      <Cockpit
       persons={personsState.persons}
       showPersons={showPersonsState.showPersons}
       clicked={togglePersonHandler}
      />
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

// const nameChangedHandler = (event) => {
//   setPersonsState({
//     persons: [
//       { name: "Zeno", age: 22 },
//       { name: "HarryPotter", age: 25 },
//       { name: event.target.value, age: 24 }
//     ], 
//   });
// } 


  // style.backgroundColor = "red";
    // style[":hover"] = { //pseudo selectors are all suported with Radium 
    //   backgroundColor: "salmon",
    //   color: "black"
    // } 