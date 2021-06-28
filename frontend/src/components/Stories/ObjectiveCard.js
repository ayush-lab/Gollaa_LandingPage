import React from 'react';

export default function ObjectiveCard(props){

    return (
        <div className="ObjectiveCard">
            <div className="ObjectiveCard-image"> 
                <img src={props.image} alt={props.alt}/>
            </div>

            <div className="ObjectiveCard-content">
                <p className="ObjectiveCard-content-para">{props.content}</p>
            </div>
        </div>
    )
}