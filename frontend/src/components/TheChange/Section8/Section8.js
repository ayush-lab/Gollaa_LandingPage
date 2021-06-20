import React from 'react';
import Card from './card';
import Audacious from '../../../assets/images/Audacious.svg';
import Innovation from '../../../assets/images/Innovation.svg';
import Sustainability from '../../../assets/images/Sustainability.svg';
import Community from '../../../assets/images/Community.svg';



export default function Section8Values(){

    return(
    
        <div className="Section8Values">
            <p className="Section8Values-heading">Gollaa's Values</p> 

            <div className="Section8Values-cards">
                <Card src={Audacious} alt={"Audacious"}  
                      backText={"TODAY FOR TOMORROW perfectly captures the motivation and inducement that we carry within our hearts to help local communities become resilient and gain a reputable position in society. By taking action"} />
                <Card src={Innovation} alt={"Innovation"}  backText={"back"} />
                <Card src={Sustainability} alt={"Sustainability"}  backText={"back"} />
                <Card src={Community}  alt={"Community"}  backText={"back"} />
            </div>
        </div>
    
    )
}