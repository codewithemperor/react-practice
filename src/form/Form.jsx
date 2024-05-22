import React from "react";
import Input from "./input";

function Form() {
  return (
    <>
      <Input InputType="text" placeholder="Username"/>
      <Input InputType="password" placeholder="Password"/>
    </>
  );
}

export default Form;
