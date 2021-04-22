import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./Todolist/TodoApp.jsx"

ReactDOM.render(
   <div>
   <App />    {/*from todolist folder */}
   </div>
   ,
  document.getElementById("todoApp")
  //doucment.getElementById("root")
)