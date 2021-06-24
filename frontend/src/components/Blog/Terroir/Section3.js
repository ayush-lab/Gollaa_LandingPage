import React from 'react';
// import {Link} from 'react-router-dom';
import fruit1 from '../../../assets/images/medFruit1.png';
import fruit2 from '../../../assets/images/medFruit2.png';
import fruit3 from '../../../assets/images/medFruit3.png';
import fruit4 from '../../../assets/images/medFruit4.png';
import fruit5 from '../../../assets/images/medFruit5.png';
import fruit6 from '../../../assets/images/medFruit6.png';


export default function TerroirSection3(){



    return(
        <>
          <div className="TerroirSection3"> 

            <p className="TerroirSection3-heading" >Medicinally Bounteous Area</p>

            <div className="TerroirSection3-pictures">
                
                <div className="TerroirSection3-pictures-row1">
                    <div className="TerroirSection3-pictures-row1-image1">
                        <img src={fruit1} alt="fruits"/>
                        <span className="TerroirSection3-pictures-row1-image1-name">SIRIPHAL</span>
                    </div>
                    <div className="TerroirSection3-pictures-row1-image2">
                        <img src={fruit2} alt="fruits"/>
                        <span className="TerroirSection3-pictures-row1-image2-name">TIMLA</span>
                    </div>
                    <div className="TerroirSection3-pictures-row1-image3">
                        <img src={fruit3} alt="fruits"/>
                        <span className="TerroirSection3-pictures-row1-image3-name">BEDU</span>
                    </div>
                   
                </div>    

                <div className="TerroirSection3-pictures-row2">
                    <div className="TerroirSection3-pictures-row1-image4">
                        <img src={fruit4} alt="fruits"/>
                        <span className="TerroirSection3-pictures-row1-image4-name">MAKOI</span>
                    </div>
                    <div className="TerroirSection3-pictures-row1-image5">
                        <img src={fruit5} alt="fruits"/>
                        <span className="TerroirSection3-pictures-row1-image5-name">BURANSH</span>
                    </div>
                    <div className="TerroirSection3-pictures-row1-image6">
                        <img src={fruit6} alt="fruits"/>
                        <span className="TerroirSection3-pictures-row1-image6-name">KHULBANI</span>
                    </div>
                </div>

                
            </div>

          </div>

        </>
    );
}

