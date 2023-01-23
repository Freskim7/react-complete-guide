import { hover } from '@testing-library/user-event/dist/hover';
import { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

// This is our first component on React
// The code inside the return is not html but JSX
function App() {

  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "xsdg4", name: "Zeno", age: 22 }, //<- qeky element/person ne array osht a javaScript Object
      { id: "dfce7", name: "Harry", age: 44 },
      { id: "htre8", name: "Filan", age: 24 }
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
      person.name = event.target.value;

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
        {/* tek map person osht elementi i array */}
        {/* the map method returns a new array in this case a component qe o jsx also is exeuted on every element in person's array */}
        {personsState.persons.map((person, index) => { //ktu e kem kthy nje list te personav
          return <Person 
          click={() => deletePersonHandler(index)} //we execute it here as an arrow function 
          name={person.name}                       //so we can be able to pass one parameter there as an index         
          age={person.age}
          key={person.id} //kjo osht per me dit react cilat elemente me i bo re render ato t cilat kan ndryshu e jo krejt, per me i dallu nga elementet e tjera n baze te key
          changed={(event) => nameChangedHandler(event, person.id)}
          //(event) this is the first function qe ekzekutohet tana pasohet djathtats
          
          //We outputet a list by maping an array into an array with jsx elements.
          //This is common pattern for outputing lists in React
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

// const nameChangedHandler = (event) => {
//   setPersonsState({
//     persons: [
//       { name: "Zeno", age: 22 },
//       { name: "HarryPotter", age: 25 },
//       { name: event.target.value, age: 24 }
//     ], 
//   });
// } 