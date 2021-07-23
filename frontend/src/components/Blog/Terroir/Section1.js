import React from 'react';
import Uttrakhand from '../../../assets/images/Uttrakhand.png';


export default function TerroirSection1(){


//   const [Section2,Section2Handler] = useState({Hover:false});


    return(
        <>
          <div className="TerroirSection1"> 

               <div className="TerroirSection1-left">
                    <img src={Uttrakhand} alt="Uttrakhand"/>
               </div>

               <div className="TerroirSection1-right">

               </div>

               <div className="TerroirSection1-text">
                   <p><span>The Immeasurable</span> <span>Worth of </span>Uttarakhand Terroir</p>
               </div>
          </div>

          <div className="TerroirDescription">
              <p>
              Located in the North-Western region of the Himalayas is the 
              state of Uttarakhand. With its bewitching landscape and diverse 
              climatic conditions, it is home to several species of plants and
               animals. The topography of the state varies from snow-covered peaks
                and glaciers to plains. Various canyons and lakes can also be 
                found in the region. The abundance of scarce mineral resources 
                in Uttrakhand allows it to have a rich diversity of edible plant 
                species. These species vary in aroma, flavor, and <span>other 
                characteristics.</span> The high altitude, dry climate, and organic richness of soil offer a unique terroir to Uttarakhand. It allows the farmers here to grow a variety of crops that are characteristic of the region. Moreover, the temperate climate with season variations
               adds to the pliancy of crop production in the state.
              </p>
          </div>

        </>
    );
}

