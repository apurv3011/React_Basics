import React from "react";
// import "./App.css";
// import List from "./List";

class MyComp extends React.Component{
    state = {
        someNumbers : 1,
    };

    render = () =>{
        return (
           <div>
               <h1>{this.state.someNumbers}</h1>


               <button onClick = { ()=>{
                   this.setState({someNumbers : this.state.someNumbers + 1});
                }
            }> Incrementor
                </button>
               
                <button onClick = { ()=>{
                    this.setState({someNumbers : this.state.someNumbers - 1});
                 }
                }>
                    Decrementor
            
            
                   
               </button>
               
               
               
           </div>
        );
    }
}
export default MyComp;