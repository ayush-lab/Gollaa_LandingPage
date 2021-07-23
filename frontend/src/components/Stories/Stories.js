import React from 'react';
import ObjectiveCard from './ObjectiveCard';
import RecycleBin from '../../assets/images/recycleBin.svg';
import Groups from '../../assets/images/groups.svg';
import Environment from '../../assets/images/environment.svg';
import Community from '../../assets/images/communities.svg';
import CircularEconomy from '../../assets/images/circularEconomy.svg';

import EconomicCard from './EconomicCard';
import GollaTree from '../../assets/images/GollaTrees.svg';
import GollaIdeas from '../../assets/images/GollaIdeas.svg';
import ValueGolla from '../../assets/images/valueGolla.svg';
import BlockChain from '../../assets/images/blockChain.svg';
import Platforms from '../../assets/images/platforms.svg';
import FarmersGolla from '../../assets/images/farmersGolla.svg';



export default function StoriesSections(){


    return(
          <>
            <div className="StoriesSection1">
                <div className="StoriesSection1-text">
                    <p className="StoriesSection1-text-heading">Our Stories</p>
                    <p className="StoriesSection1-text-para">While waiting for their coffee in a Café in Paris during summer of 2020, Karim, Aman and Utkarsh had a discussion on the agriculture system and how food is perceived by society, despite the enormous challenges it continues to provide us. Yet our local heros ( farmers and local businesses) remain in disguise. Later that same year Subhash and Jot Singh, accustomed with the ground reality of the current Indian framework, partnered in the inception of Gollaa with a vision of bringing transparency to the system by removing intermediaries and hurdles for both consumers and local farmers/local businesses. Hence, Gollaa, a 360° Transformative economy with a solid, scalable and effective infrastructure supporting not only local businesses/ local farmers but the local communities by creating micro interactions and transactions within the 
                        community via technology and making communities resilient was founded.</p>
                </div>

                <p className="StoriesSection1-heading">OUR CORE OBJECTIVE</p>
                <div className="StoriesSection1-cards">
                    <ObjectiveCard 
                        image={Environment} 
                        alt="Environment" 
                        content={"To bring back the social connection between the environment and the humanity"}/>
               
                     <ObjectiveCard 
                        image={Community} 
                        alt="Community" 
                        content={"Resilience among local economies and to build communities"}/>
                    
                    <ObjectiveCard 
                        image={CircularEconomy} 
                        alt="Circular economy" 
                        content={"Circular economy"}/>
                    
                    <ObjectiveCard 
                        image={Groups} 
                        alt="Groups" 
                        content={"To build 360° collaborative economy for local business/local farmers and the consumers"}/>
                    
                    <ObjectiveCard 
                        image={RecycleBin} 
                        alt="Zero waste" 
                        content={"Zero waste"}/>
                </div>
            </div>


        <div className="StoriesSection2">
            <p className="StoriesSection2-heading">What is our Economic model</p>
            <div className="StoriesSection2-cards">

                <div className="StoriesSection2-cards-row1">
                    <EconomicCard 
                        image={BlockChain} 
                        content="100% transparency guaranteed by Blockchain technology" 
                        alt="BlockChain"
                        backgroundColor="#5FAF42"
                        color="white"
                        />
                    
                    <EconomicCard 
                        image={Platforms} 
                        content="Gollaa is a multifaceted platform with local economy and environment at its heart" 
                        alt="multifaceted platform"
                        backgroundColor="#FFE815"
                        color="#707070" 
                        />

                    <EconomicCard 
                        image={FarmersGolla} 
                        content="A collaborative platform/local business where farmers can directly sell their products to consumers" 
                        alt="farmers"
                        backgroundColor="#ADCB4F"
                        color="white"/>
                </div>

                <div className="StoriesSection2-cards-row2">
                    <EconomicCard 
                        image={ValueGolla} 
                        content="Gollaa support to provide seminars and holistic training programs for local businesses to rekindle the local markets." 
                        alt="seminars and holistic"
                        backgroundColor="#5DBC58"
                        color="#FFFFFF" />

                    <EconomicCard 
                        image={GollaIdeas} 
                        content="Peer to peer microfinancing to support farmers aiming for sustainable innovation" 
                        alt="Peer to peer microfinancing"
                        backgroundColor="#A1D8D8"
                        color="#707070"/>

                    <EconomicCard 
                        image={GollaTree} 
                        content="Hospitality services for urbanites to reunite with roots and treasure the tranquility in midst of Farm and close to nature." 
                        alt="GollaTree"
                        backgroundColor="#CEC41D"
                        color="#FFFFFF"/>  
                </div>
            </div>
        </div>
     </>  
    );
}

