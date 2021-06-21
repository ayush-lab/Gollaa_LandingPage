import React from 'react';
import Card from './card';
import Audacious from '../../../assets/images/Audacious.svg';
import Innovation from '../../../assets/images/Innovation.svg';
import Sustainability from '../../../assets/images/Sustainability.svg';
import Community from '../../../assets/images/Community.svg';



export default function Section8Values(){

    return(
    
        <div className="Section8Values">
            <p className="Section8Values-heading">Gollaa's Values</p> 

            <div className="Section8Values-cards">

                <Card src={Audacious} alt={"Audacious"}  
                      backText={"Gollaa’s mission is to bring a shift in the socio-economic paradigm by empowering local communities. Golla has boldly taken up this initiative and is committed to driving meaningful change in the world by encouraging social resilience and responsibility. We are committed to helping farmers and artisans earn the recognition and livelihood they deserve."} 
                      backColor={"#4FB9B9"}
                      textColor={"white"}/>

                <Card src={Innovation} alt={"Innovation"} 
                      backText={"Innovation lies at the heart of Gollaa’s efforts, and all of our initiatives are driven by forward-looking ideas. We are working towards building a better and more sustainable world for the upcoming generations using the recent advancements in technology."} 
                      backColor={"#F1F2F2"}
                      textColor={"black"}/>

                <Card src={Sustainability} alt={"Sustainability"}  
                      backText={"Most of the advancements in the world have been at the expense of the environment. Gollaa is here to change this narrative by encouraging sustainability and building a sense of responsibility towards the environment. We minimize the ecological footprint by creating smaller local supply chains"} 
                      backColor={"#F0E584"}
                      textColor={"black"}/>

                <Card src={Community}  alt={"Community"} 
                      backText={"At Gollaa, everyone is treated like a part of a community. Our efforts are aimed at building a compassionate community of eco-aware consumers and producers. Extending peer to peer support is our way of creating resilient communities that are capable of sustaining and supporting their members."} 
                      backColor={"#145629"}
                      textColor={"white"}/>
            
            </div>
        </div>
    
    )
}