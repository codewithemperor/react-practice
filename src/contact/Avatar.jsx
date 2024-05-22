import React from "react";

function Avatar(props) {
    return(
        <img
            className="circle-img"
            src={props.img}
            alt="Avatar"
        />
    )
}

function Details(props) {
    return (
        <p className='info'>{props.info}</p>
    )
}

export default Avatar;
export {Details};