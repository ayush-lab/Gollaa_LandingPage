import React from 'react';
import Actions from '../../../assets/images/Actions.svg'

export default function Section6Today(){

    return(
          <div className="Section6Today">

            <div className="Section6Today-info">
       
                <div className="Section6Today-info-heading">
                    <p className="Section6Today-info-heading-text">Taking action for a better future </p>
                </div>
                <div className="Section6Today-info-para">

                    <p className="Section6Today-info-para-text1">Redefining the economy isn’t an easy job, but we at
                     Gollaa are up for the challenge. We strive to provide the recognition and profits that local farmers 
                     and artisans rightfully deserve. Our mission is to establish a socially just and viable 
                    economy that is self-sufficient and does not rely on the global economy.</p>

                    <p className="Section6Today-info-para-text2"> Gollaa’s concept of a local circular economy prevents money from leaving the region, which 
                        will empower the communities by saving them from any crises or fluctuations that are quite 
                        frequent in the current landscape. We also wish 
                        to divulge training and knowledge to local communities to strengthen their position.</p>

                    <p className="Section6Today-info-para-text3"> We at Gollaa have decided to take up the responsibility of
                         paving the way for a better tomorrow- one that is sustainable and humane.</p>

                </div>
            </div>

            <div className="Section6Today-picture">
                <img className="Section6Today-picture-earth" src={Actions} alt="Taking action for a better future"/>
            </div>


        </div>

    
    );
}

