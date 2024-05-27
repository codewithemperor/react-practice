import React, { useState } from "react";

function App() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    // const [fname, setfname] = useState("");

    function firstName(event) {
        setfname(event.target.value);
    }

    function lastName(event) {
        setlname(event.target.value);
    }

    return (
        <div className="container">
            <h1>Hello {fname} {lname}</h1>
            <form>
                <input name="fnmae" placeholder="First Name" onChange={firstName} />
                <input name="lnmae" placeholder="Last Name" onChange={lastName}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;