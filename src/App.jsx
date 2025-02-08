
import AppName from "./components/AppName";
import AppToDo from "./AppToDo";


import './App.css';

import Todoitems from "./todoitems";


function App() {

  const todoitems=[
    {
      name:"buy milk",
      dueDate:"07/02/2025",
    },
    {
      name:"Go to college",
      dueDate:"08/02/2025",
    },
    {
      name:"like this video ",
      dueDate:"right now",
    },

  ];
  return (
    <center className="todo-container">
    <AppName></AppName>
    <AppToDo></AppToDo>
    <Todoitems todoitems={todoitems}></Todoitems>
    
    </center>
  );
}

export default App;
