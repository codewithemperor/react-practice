
import React from "react";
import cars from "./practice.jsX";

function App() {

    // console.log(cars);
    const [honda, tesla] = cars;
    
    const {
        coloursByPopularity:[teslaTopColour], 
        speedStats: {topSpeed: teslaTopSpeed}
    } = tesla;
    
    
    const {
        coloursByPopularity:[hondaTopColour], 
        speedStats: {topSpeed: hondaTopSpeed}
    } = honda;
    
   
    
    
    


    
    return(
    <table>
        <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        </tr>
        <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
        </tr>
        <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
        </tr>
    </table>

    );
}

export default App;