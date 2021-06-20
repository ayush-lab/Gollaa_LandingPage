import React from 'react';
import Certificate from '../../../assets/images/Certificate.svg'


export default function Section3Change(){


    return(
        <div className="Section3Change">

            <div className="Section3Change-picture">
                <img className="Section3Change-picture-earth" src={Certificate} alt="Gollaa cerficate"/>
            </div>


            <div className="Section3Change-info">
       
                <div className="Section3Change-info-heading">
                    <p className="Section3Change-info-heading-text">Gollaa Certified </p>
                </div>
                <div className="Section3Change-info-para">

                    <p className="Section3Change-info-para-text1">In the current scenario, finding the authenticity of
                     the products is a challenging task. Gollaa Certified is an initiative that makes this process 
                    easier by making technology accessible to consumers as well as producers. </p>

                    <p className="Section3Change-info-para-text2">  Gollaa is a blockchain-based marketplace that
                     helps customers source high-quality products directly from farmers and artisans. Since buyers have
                      the option of tracking
                     the value and authenticity of the products, they can be assured of their safety.</p>

                    <p className="Section3Change-info-para-text3"> Safeguarding your health</p>

                    <p className="Section3Change-info-para-text4">  When you choose Gollaa certified products, you 
                    can be at ease about their safety and quality. 
                    Gollaa ensures that the health of you and your loved ones is not at risk.</p>

                </div>
            </div>
        </div>
    );
}

