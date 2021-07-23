import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import earth from '../../../assets/images/Today for tomorrow Illustration.svg'
import logo from '../../../assets/images/Gollaa Logo White.svg'

export default function Section2(){


  const [Section2,Section2Handler] = useState({Hover:false});


    return(
          <div className="Section2"  
               onMouseEnter={()=>{Section2Handler(prevState=>({...prevState,Hover:true}))}}
               onMouseLeave={()=>{Section2Handler(prevState=>({...prevState,Hover:false}))}}>

            <div className="Section2-picture">
                <div className="Section2-picture-earth">
                    <img  src={earth} alt="earth with factories and trees"/>
                </div>

                <div className="Section2-picture-top">

                </div>

                <div className="Section2-picture-bottom">

                </div>
            </div>


            <div className="Section2-info">
                <div className="Section2-info-top">
                    <div className="Section2-info-top-imagewithText">
                        <img className="Section2-info-top-image" src={logo} alt="logo"/>
                        <p className="Section2-info-top-text">TODAY FOR <span>TOMORROW</span></p>
                    </div>
                </div>

                <div className="Section2-info-bottom">
                    <p className="Section2-info-bottom-bigText1">
                    Gollaa is a platform that allows 
                    farmers and local businesses to market and sell 
                    their products at real prices. </p>
                    
                   <p className="Section2-info-bottom-bigText2"> Our vision statement 
                    " TODAY FOR TOMORROW" perfectly captures the motivation and inducement
                     that we carry within our hearts to help local communities become
                      resilient and gain a reputable position in society. By taking action
                       today, we wish to create an equilibrium between the environment and humanity.
                    </p>
                    
                    <div className={Section2.Hover ? "Section2-info-bottom-link": "Section2-info-bottom-linkNone"}>
                        <Link className="link" to="/today">See More</Link>
                    </div>
                    
                </div>
            </div>

            <div className={Section2.Hover ? "overlay-come": "overlay-exit"}></div>
        </div>

    
    );
}

