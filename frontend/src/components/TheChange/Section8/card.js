import React from 'react';


export default function Card(props){

    return(
    
           <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={props.src} alt={props.alt}/>
                    </div>
                    
                    <div className="card-back">
                        <p>{props.backText}</p>
                    </div>
                </div>
            </div>
         
    
    )
}