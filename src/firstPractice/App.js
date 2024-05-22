import React from 'react';
import Header from './Header';
import List from './List';
import Random from './Random';
import {addition, subtraction, division, multiplication} from './Calculator';

function App(){
  return(
    <div>
      <Header />
      <List />
      <Random />
      <ul>
        <li>{addition(1,2)}</li>
        <li>{multiplication(2,3)}</li>
        <li>{subtraction(7,2)}</li>
        <li>{division(5,2)}</li>
      </ul>
    </div>
  )
}

export default App;