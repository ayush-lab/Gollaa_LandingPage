import React from 'react';
// import {Link} from 'react-router-dom';
import fruit1 from '../../../assets/images/fruit1.png';
import fruit2 from '../../../assets/images/fruit2.png';
import fruit3 from '../../../assets/images/fruit3.png';
import fruit4 from '../../../assets/images/fruit4.png';
import fruit5 from '../../../assets/images/fruit5.png';
import fruit6 from '../../../assets/images/fruit6.png';
import fruit7 from '../../../assets/images/fruit7.png';
import fruit8 from '../../../assets/images/fruit8.png';
import fruit9 from '../../../assets/images/fruit9.png';




export default function TerroirSection2(){


//   const [Section2,Section2Handler] = useState({Hover:false});


    return(
        <>
          <div className="TerroirSection2"> 

             <div className="TerroirSection2-left">
                 <p>Fruits of <span>Uttarakhand</span></p>
             </div>

             <div className="TerroirSection2-right"> 

                    <div className="TerroirSection2-right-top">
                        <p>The richness of Uttarakhand terroir allows it to produce some exquisite fruits with an amazing taste and high nutritional value. Some of the piquant 
                            fruits you’ll be able to enjoy once you are in Uttarakhand are listed below-</p>
                    </div>

                    <div className="TerroirSection2-right-middle">
                        <div className="TerroirSection2-right-middle-col1">
                            <img src={fruit1} alt="fruits"/>
                            <img src={fruit2} alt="fruits"/>
                            <img src={fruit3} alt="fruits"/>
                        </div>
                        <div className="TerroirSection2-right-middle-col2">
                            <img src={fruit4} alt="fruit"/>
                            <img src={fruit5} alt="fruit"/>
                            <img src={fruit6} alt="fruit"/>
                        </div>
                        <div className="TerroirSection2-right-middle-col3">
                            <img src={fruit7} alt="fruit"/>
                            <img src={fruit8} alt="fruit"/>
                            <img src={fruit9} alt="fruit"/>
                        </div>
                    </div>

                    <div className="TerroirSection2-right-bottom">
                        <p>It is possible to grow such an extensive variety of edible fruiting plants 
                            in Uttarakhand despite their requirement of specific climatic conditions and geography.</p>
                    </div>

             </div>


          </div>

        </>
    );
}

