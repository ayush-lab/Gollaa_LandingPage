import React from 'react';
// import {Link} from 'react-router-dom';
import City from '../../../assets/images/city.png';
import City3 from '../../../assets/images/city3.svg';
import Migrants from '../../../assets/images/migrants.png';
import City2 from '../../../assets/images/city2.png';



export default function CitySection1(){



    return(
        <>
          <div className="CitySection1"> 

                <div className="CitySection1-left">
                    <img src={City} alt="city"/>
                </div>

                <div className="CitySection1-right">
                    <div className="CitySection1-right-text">
                    <p className="CitySection1-right-text-heading">An Escape Nestled <span>Away From The Cities</span></p>
                    <p className="CitySection1-right-text-para1">Agrotourism, a term that has earned immense popularity in recent years, with more 
                        urban people craving the serenity and calm of the countryside. With a phone that never 
                        stops ringing or the lack of fresh air, city life can be daunting at times. Tourists can
                         experience a comfortable stay at a vineyard, plantation, or farm of their choice. This option is still unexplored to a great extent, but more people are recognizing the benefits of such farm stays with the passage of time.</p>
                    <p className="CitySection1-right-text-para2"> Farm owners can earn additional income by diversifying their activities and renting out farm spaces to city dwellers. Visitors can benefit from this opportunity by learning how the products they consume are grown. They can better understand what goes on with the food between its production and it reaching their kitchens. They can also get to breathe in the fresh air of the farms. The peace and quietude of such spaces can be
                         beneficial for people who wish to take a breather from their hectic lives.</p>
                   
                     </div>

               </div>

          </div>

          <div className="CitySection2">
              <img src={City3} alt="city1"/>
              <div className="CitySection2-text">
                  <p className="CitySection2-text-heading">What Is Agrotourism?</p>
                  <p className="CitySection2-text-para">What started out as a venture by farmers to earn extra money to 
                      sustain themselves has now transformed into a global business.
                       Agrotourism was initiated to help farmers keep pace with their 
                       dwindling economy with globalization rising at an unprecedented rate.
                       This tourism focuses on education as well as recreation.</p>

              </div>
          </div>

          <div className="CitySection3">
                <div className="CitySection3-left">
                    <div className="CitySection3-left-text">
                        <p className="CitySection3-left-text-heading">
                        How Can Agrotourism Help Distress <span>Migration</span>?
                        </p>
                   
                        <p className="CitySection3-left-text-para1">
                        A significant portion of the rural population is forced to
                        uproot their lives and move to an urban location. This is for a meager
                        income that they use to sustain their families. Also termed as distress
                        migration, it often results in ghost villages with abandoned houses
                            and little to no population.
                        </p>
                        <p className="CitySection3-left-text-para2"> Agrotourism can be the solution for this
                            problem by creating employment opportunities in rural areas. 
                            The local economic activity and status of the region can be improved 
                            promoting agrotourism. Tourists can contribute to the upliftment of
                            the local producer’s livelihood. Along with this, this type of 
                            tourism can
                        provide a boost to the local crafts, cuisine, other trades.</p>
                     </div>
                </div>

                <div className="CitySection3-right">
                    <img src={Migrants} alt="migrants"/>
                </div>
          </div>

          <div className="CitySection4">
              <p className="CitySection4-heading">Benefits of Agrotourism</p>
              <p className="CitySection4-para">Farmers around the world have started diversifying their income sources to increase profitability. Agrotourism can prove to be beneficial for such farmers as well as consumers. It can help farmers gain more recognition and revenue for their products. Consumers can learn about various farm activities during their stay. Some farm spaces also provide the option to consumers to help out. Agrotourism can also boost the local economy with visitors who would eat and shop locally. Visitors can dine in on the local
               cuisine and explore more about the region’s heritage.</p>

          </div>

          <div className="CitySection5">
              <div className="CitySection5-left">
                  <img src={City2} alt="city"/>
              </div>
            <div className="CitySection5-text">
                <div className="CitySection5-right">
                    <p className="CitySection5-right-heading">Environmental Impact of Agrotourism</p>
                    <p className="CitySection5-right-para">Agrotourism is the perfect amalgamation of luxury and sustainability. It has brought forward the need for creating awareness about climate change and organic production activities. Agrotourism is an eco-friendly way of rejuvenating and discovering the beauty of farms. It has a reduced footprint
                    as compared to conventional tourism.</p>
                </div>

                <div className="CitySection5-last">
                    <p className="CitySection5-last-heading">Final Words</p>
                    <p className="CitySection5-last-para">So the next time life gets too overwhelming with a 
                        hectic schedule, polluted environment, or overcrowded localities, choose to take a break from 
                        the hustle and bustle. A pleasant and comfortable stay at a farm can reduce your stress
                        and anxiety and help you come back with replenished energy and focus.</p>
                </div>
              </div>


          </div>

        </>
    );
}

