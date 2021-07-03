import React from 'react';
import {Link} from 'react-router-dom';
import earth_Illustration from '../../../assets/images/Earth Illustration.svg'
import logo from '../../../assets/images/Gollaa Logo White.svg'

export default function Section4(){


  const [Section4,Section4Handler] = React.useState({Hover:false});

    return(
        <div className="Section4"
             onMouseEnter={()=>{Section4Handler(prevState=>({...prevState,Hover:true}))}}
             onMouseLeave={()=>{Section4Handler(prevState=>({...prevState,Hover:false}))}}>

            <div className="Section4-picture">
                <div className="Section4-picture-earth">
                    <img  src={earth_Illustration} alt="earth being built"/>
                </div>
                <div className="Section4-picture-top">

                </div>

                <div className="Section4-picture-bottom">

                </div>
            </div>


            <div className="Section4-info">

                <div className="Section4-info-top">
                    <div className="Section4-info-top-imageText">
                        <img className="Section4-info-top-imageText-image" src={logo} alt="logo"/>
                        <p className="Section4-info-top-imageText-Text">
                            <span>GOLLAA: </span> A CHANGE 
                        </p>
                    </div>
                </div>

                <div className="Section4-info-bottom">
                    {/* <p className="Section4-info-bottom-Text1">
                    <span>GOLLAA: </span> A CHANGE 
                    </p> */}

                    <p className="Section4-info-bottom-Text2" >We at Gollaa have decided to take up the 
                        responsibility of paving the way for a
                         better tomorrow- one that is sustainable and humane.</p>
                    
                    <div className={Section4.Hover ? "Section2-info-bottom-link": "displayNone"}>
                        <Link to="/change" className="link">See More</Link></div>
                </div>
            </div>

            <div className={Section4.Hover ? "overlay-come": "overlay-exit"}></div>
        </div>
    );
}

