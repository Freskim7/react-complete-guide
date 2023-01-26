import "./Person.css";
// This is the same as the one below
// const person = function() {
//     return <p>Im a person</p>
// }
//Inside a function posht return duhet me u use <div></div> per me funksionu kodi mrena
const person = (props) => {
    // return <p>Im a person and i am {Math.floor(Math.random() * 30)} years old</p>
    return (
        
        <div className="Person" >
            <p onClick={props.click}>Im {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p> 
            <input type="text" onChange={props.changed} value={props.name}/>  

        </div>
    );
    // .children is used to acces everything that is in the middle of <person></person> component 
};
 
export default person;

// This one can be used too
// function zeno(){
//     return
// }


//to use Radium u need to push these in
// import Radium from "radium";
// export default (person);
//also u need to include import Radium, {StyleRoot} from 'radium'; in the root component qe osht App
//and wrap the return of App with <StyleRoot> </StyleRoot>
