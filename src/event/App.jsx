import React, {useState} from "react";

function App(){

    const [name, setName] = useState("")
    const [replace, setReplace] = useState("")
        

    function handleChange(event) {
         setName(event.target.value);   
    }

    function click(){
        setReplace(name);
    }

    return(
        <div className="container">
            <h1>Hello {replace}</h1>
            <input 
                onChange={handleChange} 
                type="text" 
                placeholder="What is your name?"
                value={name} />
            <button 
                onClick={click} 
                >Submit
            </button>
        </div>
    );
}

export default App;