import "./Cockpit.css"
import React, { useEffect } from "react";

const Cockpit = (props) => {
    useEffect(() => {
        console.log("[Cockpit.js] useEffect")
        //Http request... (nese dojm me qu naj http request mujm)
        setTimeout(() => {
            alert("Saved data to cloud!");
        }, 1000);
        return () => {
            console.log("[Cockpit,js] cleanup work in useEffect");
        }
    },[]); //momentin qe ndryshohet diqka qetu thirre useEffects

    //we can use more than 1 useEffect function on here

    useEffect(() => {
        console.log("[Cockpit.js] 2nd useEffect");
        return () => {
            console.log("[Cockpit.js] cleanup work in 2nd useEffect");
        }
    }) 
 
    let classes = [];   

    if(props.personsLength <=2){
        classes.push("red"); //classes = ["red"]
    }
    if(props.personsLength <=1){
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

export default React.memo(Cockpit);
//this method will memorise or store a snapshot of this component
//and only if this input changes it will re render it. 