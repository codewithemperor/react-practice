import React from "react";
import Form from "./Form";
import Input, { Button } from "./input";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <form className="form">
      
      <Form />
      {!userIsRegistered && <Input InputType="password" placeholder="Confirm Password"/>}
      {userIsRegistered ? <Button name="Login"/> : <Button name="Register"/>}
      
    </form>
    </div>
  );
}

export default App;
