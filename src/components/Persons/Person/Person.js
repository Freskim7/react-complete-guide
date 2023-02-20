import "./Person.css";
import PropTypes from "prop-types"
import AuthContext from "../../../context/auth-context";

// This is the same as the one below
// const person = function() {
//     return <p>Im a person</p>
// }
//Inside a function posht return duhet me u use <div></div> per me funksionu kodi mrena
const person = (props) => {
    // return <p>Im a person and i am {Math.floor(Math.random() * 30)} years old</p>
    return (
        <div className="Person" >
            <AuthContext.Consumer>
                {context =>
                context.authenticated ? <p>Authenticted!</p> : <p>Please Log in</p>
                }
            </AuthContext.Consumer> 
            <p onClick={props.click}>Im {props.name} and i am {props.age} years old</p>
            <input onChange={props.changed} value={props.name} /> 
        </div>  
    );
    // <p>{props.children}</p> 
    // .children is used to acces everything that is in the middle of <person></person> component 
};

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

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
