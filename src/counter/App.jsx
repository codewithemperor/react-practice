import React from "react";
import "./App.css";

function App(){
   const [count, increamental] = React.useState(0);
   const increament = () => increamental(count + 1);
   const decreament = () => increamental(count - 1);
   return (
      <div className="container  ">
         <h1>This is a counter</h1>
         <div>
            <h2 className="counter">{count}</h2>
         </div>
         <div className="flex">
            <button onClick={increament}>+</button>
            <button onClick={decreament} className="red">-</button>
         </div>
      </div>
    )
}

export default App;