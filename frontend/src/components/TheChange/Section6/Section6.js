import React from 'react';
import Trust from '../../../assets/images/Trust.svg'

export default function Section6Change(){

    return(
          <div className="Section6Change">

            <div className="Section6Change-info">
       
                <div className="Section6Change-info-heading">
                    <p className="Section6Change-info-heading-text">What does it involve?  </p>
                </div>
                <div className="Section6Change-info-para">

                    <p className="Section6Change-info-para-text1"> Gollaa provides local business owners and 
                    farmers with the opportunity to maximize their potential by providing the required training,
                     education, consulting, research and legal aid. Providing guidance to our local 
                    heroes or producers to achieve success is our primary objective.  </p>

                    <p className="Section6Change-info-para-text1"> Gollaa support also involves strengthening
                     the local collaborative economy with the help of peer to peer micro-financing platforms. 
                     The holistic training programs by Gollaa aim to improve the efficiency of farmers by helping 
                     them diversify
                     their activities, such as renting for farm stays to earn better profits.</p>


                </div>
            </div>

            <div className="Section6Change-picture">
                <img className="Section6Change-picture-earth" src={Trust} alt="Sustainable_Future at Gollaa"/>
            </div>


        </div>

    
    );
}

