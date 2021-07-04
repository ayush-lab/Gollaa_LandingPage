import React from 'react';


export default function MobCard(props){


    return(
           <div className="Mobcard" style={{color:props.textColor,background:props.backColor}}>
                <div className="Mobcard-image">
                    <img src={props.src} alt={props.alt}/>
                </div>

                <div className="Mobcard-text" >
                    <p >{props.alt}</p>
                    <p >{props.backText}</p>
                </div>
            </div>
         
    
    )
}