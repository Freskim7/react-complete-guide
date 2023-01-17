
// This is the same as the one below
// const person = function() {
//     return <p>Im a person</p>
// }


const person = (props) => {
    // return <p>Im a person and i am {Math.floor(Math.random() * 30)} years old</p>
    return (
        <div>
            <p>Im {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>      
        </div>
    );
    // .children is used to acces everything that is in the middle of <person></person> component 
};
 
export default person;

// This one can be used too
// function zeno(){
//     return
// }