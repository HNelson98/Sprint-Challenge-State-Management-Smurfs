import React from 'react';

export default function SmurfCard(props) {
    return(
        <div className= 'card' >
            <h2>{props.name}</h2>
            <p>Age:{props.age}<br/>Height:{props.height} </p>

        </div>
    )
}