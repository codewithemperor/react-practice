import React, { useState } from "react";
import './app.css'

function App() {
  const [formList, setFormList] = useState("");
  const [array, SetArray] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value
    setFormList(newValue); 
  }

  function click(){
    const spread = [...array, formList];
    SetArray(spread);
    setFormList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={formList}/>
        <button onClick={click}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map(list => <li>{list}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
