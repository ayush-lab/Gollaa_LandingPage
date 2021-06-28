import React from 'react';

export default function EconomicCard(props){

    return (
        <div className="EconomicCard" style={{backgroundColor:props.backgroundColor}}>
            <div className="EconomicCard-image"> 
                <img src={props.image} alt={props.alt}/>
            </div>

            <div className="EconomicCard-content" style={{color:props.color}}>
                <p className="EconomicCard-content-para">{props.content}</p>
            </div>
        </div>
    )
}