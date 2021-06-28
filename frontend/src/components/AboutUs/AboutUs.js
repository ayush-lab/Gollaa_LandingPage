import React from 'react';
import EconomicCard from '../Stories/EconomicCard';
import Heroes from '../../assets/images/heroes.svg';
import Helpfulness from '../../assets/images/helpfulness.svg';
import Money from '../../assets/images/money.svg';

export default function AboutUs(){


    return(
          <>
            
            <div className="AboutUsSection1">
                <div className="AboutUsSection1-text">
                    <p className="AboutUsSection1-text-para1">At Gollaa we believe that this is the time we have to create a new socio-economic paradigm that responds to our current situation as well as creates an equilibrium between humanity and nature. The gollaa (Circle or 360°) is an universal symbol with extensive meaning, it represents the notions of totality, wholeness, original perfection, the self, the infinite, eternity, timelessness, all cyclic movements, God (‘God is a circle whose centre is everywhere and whose circumference is nowhere’) “Hermes Trismegistus''. Golla implies an idea of the movement and symbolizes the cycle of time, the perpetual motion of everything that moves. The circle is also “Zero” in our numbering system and symbolizes potential, or the embryo. It has a magical value as a protective agent and indicates the end of the process of individuation and a move towards oneness. Gollaa is a blockchain backed marketplace for local producers and consumers to interact and participate in local economy; furthermore, this technology will not only help consumers to track quality, origin and nature of their products, as well as, it will help farmers and local businesses 
                        to directly interact with their consumers anticipate their needs and requirements.</p>
                    <p className="AboutUsSection1-text-heading">Gollaa's value</p>
                    <p className="AboutUsSection1-text-para2">Gollaa aims to bring transparency to the consumer market where everyone is treated like a community. Gollaa’s core value is strengthening local communities and local economies by creating a system of peer to peer micro-financing platforms and holistic education platforms which will boost productivity and efficiency of local farmers and businesses. These platforms will keep the environment at its core unlike conventional industrial farming and trade.
                         Gollaa will strive to maintain the equilibrium between nature and humanity.</p>
                    <p className="AboutUsSection1-text-para3">Thus, Gollaa’s social business model is fundamentally based on three core values:</p>
                </div>
            </div>

            <div className="AboutUsSection2">
                <div className="AboutUsSection2-cards">
                    <EconomicCard 
                        image={Money} 
                        content="Giving farmers/individual businesses real value of their produce" 
                        alt="Money"
                        backgroundColor="#5FAF42"
                        color="white"
                        />
                    
                    <EconomicCard 
                        image={ Heroes} 
                        content="Reinforcing local economies by creating local heroes" 
                        alt=" Heroes"
                        backgroundColor="#FFE815"
                        color="#707070" 
                        />

                    <EconomicCard 
                        image={ Helpfulness} 
                        content="Increasing social transactions in the most humane way possible" 
                        alt="Helpfulness"
                        backgroundColor="#ADCB4F"
                        color="white"/>
                        
                </div>
            </div>
     </>  
    );
}

