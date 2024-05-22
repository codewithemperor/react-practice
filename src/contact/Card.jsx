import React from 'react';
import Avatar, {Details} from './Avatar';



function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    
                    <h2 className="name">{props.name}</h2>
                    <Avatar img={props.img}/>
                </div>
                <div className="bottom">
                    {<Details info={props.tel}/>}
                    {<Details info={props.email}/>}
                    
                </div>
            </div>
        </div>
    )
}



export default Card;
