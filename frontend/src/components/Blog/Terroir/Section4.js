import React from 'react';
// import {Link} from 'react-router-dom';
import Uttrakhand2 from '../../../assets/images/Uttrakhand2.png';


export default function TerroirSection4(){

    return(
        <>
          <div className="TerroirSection4"> 

            <div className="TerroirSection4-left">
                <img src={Uttrakhand2} alt="Uttrakhand2"/>
            </div>

            <div className="TerroirSection4-right">
                <p className="TerroirSection4-right-heading">Examples of Uttarakhand’s <span>rich produce</span></p>
                <p className="TerroirSection4-right-para">You may have already heard of the brilliance of Kiwis grown in Uttarakhand.
                     The crop produces maximum yield when it is cultivated between 1200-1500 m altitudes.
                      The hilly areas of Uttarakhand are therefore highly suitable for cultivation. In the winter season, 
                      areas like Chamoli, Tehri Garhwal, and Nainital produce superior quality Kiwi in abundance. 
                      The Devbhoomi is also famous for its bamboo agroforestry. This is a result of the unique geography of 
                      the region and the copious amount of rainfall that it receives. The alluvial soil of the Terai belt,
                       which is well-drained, adds to the quality of bamboo production in the state. The local winter fruit of
                       the state- Malta, is also produced in considerable quantities. It is used in the production of squash, 
                       skincare products, etc. The fruit is a rich source of Vitamin C and is known to strengthen the body’s 
                       immune system. Other economically and medically important crops that are grown by farmers in Uttarakhand include Jhangora, Mandua (finger millet), Himalayan figs, etc. These crops that are endemic to the agro-climate of Uttarakhand can help local farmers secure huge profits. Golla is helping these farmers compete in the markets by 
                    providing access to new technologies and end-consumers without having to depend on intermediaries.</p>
            </div>
    
          </div>

        </>
    );
}

