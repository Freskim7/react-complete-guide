//ErrorBoundary work more with classes 
import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ""
    }
        
      componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error 
     });
    }

    render(){
    if(this.state.hasError){
        return <h1>{this.state.errorMessage}</h1>;
    } else {
        return this.props.children;
    }
}
}

export default ErrorBoundary;


//Using functions that does not work

// import { useState } from 'react';

// const ErrorBoundary = () => {
   
//     const [errorState, updateError] = useState({
        
//         hasError: false,
//         errorMessage: ""
       
//       });
   
//       const componentDidCatch = (error, info) => {
//         updateError({
                
//             hasError: true,
//             errorMessage: error 
//      });
//     }

//     if(errorState.hasError){
//         return <h1>{errorState.errorMessage}</h1>
//     } else {
//         return <div>{props.children}</div>>
//     }
// }

