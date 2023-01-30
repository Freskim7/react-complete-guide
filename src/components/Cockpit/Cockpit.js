import "./Cockpit.css"

const cockpit = (props) => {

    let classes = [];  

    if(props.persons.length <=2){
        classes.push("red"); //classes = ["red"]
    }
    if(props.persons.length <=1){
        classes.push("bold"); //classes = ["red", "bold"]
    }


    let buttonClass = "";

    if(props.showPersons){
        buttonClass += "buttonApp buttonAppRed";
      }else{
        buttonClass += "buttonApp";
    }

    return (
        <div className="Cockpit">
        <h1>Hello Buddy</h1>
        <p className={classes.join(" ")}>Testim</p>
        <button className={buttonClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;