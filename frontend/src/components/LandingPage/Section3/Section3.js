import React from 'react';
import farming from '../../../assets/images/Direct From Farm &.svg'
// import logo from '../../../assets/images/Gollaa Logo White.svg'

export default function Section3(){

    return(
        <div className="Section3">
            <div className="Section3-farmingText">
                <p><span>DIRECT FROM </span> <span>FARM & FARMER</span></p>

                <p><span>Your Partner on the journey of sourcing </span> <span>fresh and authentic 
                    products directly </span> from local businesses</p>
             
                <p>In our pursuit to establish a circular economy, 
                    we help farmers and artisans deliver their quality
                     products directly to the end consumers. Gollaa is a
                      powerful platform dedicated to helping our real 
                      heroes - the farmers generate profits form their 
                    products without having to deal with any middlemen.</p>
            </div>

            <div className="Section3-farmingImage">
                <div className="Section3-farmingImage-image">
                    <img src={farming} alt="man planting"/>
                </div>
            </div>

        </div>
    );
}

