import React from "react";
import "./App.css";
import Input from "./Input";
import List from "./List";

class App extends React.Component {
  state = {
    tasks: ["make coffee", "make notes", "go for a jog", "new task"],
    currInput: "",
  };


  deleteTask = (el) =>{
   
                let currTaskArr = this.state.tasks;
                let filteredarr = currTaskArr.filter((element) =>{
                  return element !== el;
                });

                this.setState({tasks : filteredarr});
  
  };

  handleInput = (value)=>{
    this.setState({currInput : value});           
    
  };

  handleTask = () => {

    this.setState({
      tasks: [...this.state.tasks , this.state.currInput],
      currInput: "",

    });


  }
  render = () => {
    return (
      <div>
        <Input  handleInput = {this.handleInput}
        handleTask = {this.handleTask}
        currInput= {this.state.currInput}/>

        <List tasks = {this.state.tasks}  
          deleteTask = {this.deleteTask}/>
      </div>
    );
  };
}

export default App;
