import Person from "./Person/Person";


const persons = (props) => 
            //tek map person osht elementi i array 
            //the map function returns a new array in this case a component qe o jsx also is exeuted on every element in person's array 
            //map na lejon me kthy 1 array te thjesht me convert into jsx  
    props.persons.map((person, index) => { //ktu e kem kthy nje list te personav
                                           //key kjo osht per me dit react cilat elemente me i bo re render ato t cilat kan ndryshu e jo krejt, per me i dallu nga elementet e tjera n baze te key 
    return  <Person 
    click={() => props.clicked(index)} //we execute it here as an arrow function 
    name={person.name}                       //so we can be able to pass one parameter there as an index         
    age={person.age}
    key={person.id}
    changed={(event) => props.changed(event, person.id)}
    //(event) this is the first function qe ekzekutohet tana pasohet djathtats
    //We outputet a list by maping an array into an array with jsx elements.
    //This is common pattern for outputing lists in React
    />
    });

export default persons;