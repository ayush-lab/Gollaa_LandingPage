import React from 'react';
import Navbar from '../../components/LandingPage/Navbar/Navbar';
import Section1 from '../../components/LandingPage/Section1/Section1';
import Section2 from '../../components/LandingPage/Section2/Section2';
import Section3 from '../../components/LandingPage/Section3/Section3';
import Section4 from '../../components/LandingPage/Section4/Section4';

export default function LandingPage(){

    return(
        <React.Fragment>
            <Navbar/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </React.Fragment>
    )
    
 
}