import React from 'react';
import Navbar from '../../components/LandingPage/Navbar/Navbar';
import Section2_Today from '../../components/TodayForTomorrow/Section1/Section1';
import Footer from '../../components/LandingPage/Footer/Footer';

export default function TodayForTomorrow(){

    return(
        <React.Fragment>
            <Navbar/>
            <Section2_Today/>

            <Footer/>
        </React.Fragment>
    )
    
 
}