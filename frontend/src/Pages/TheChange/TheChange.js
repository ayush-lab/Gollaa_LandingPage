import React from 'react';
import Navbar from '../../components/LandingPage/Navbar/Navbar';
import Section1Change from '../../components/TheChange/Section1/Section1';
import Section2Change from '../../components/TheChange/Section2/Section2';
import Section3Change from '../../components/TheChange/Section3/Section3';
import Section4Change from '../../components/TheChange/Section4/Section4';
import Section5Change from '../../components/TheChange/Section5/Section5';
import Section6Change from '../../components/TheChange/Section6/Section6';
import Section7Change from '../../components/TheChange/Section7/Section7';
import Section8Change from '../../components/TheChange/Section8/Section8';

import Footer from '../../components/LandingPage/Footer/Footer';


export default function TodayForTomorrow(){

    React.useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo(0, 0)
          }, 10);
          return () => clearTimeout(timer);
    }, [])
    
    return(
        <React.Fragment>
            <Navbar/>
            <Section1Change/>
            <Section2Change/>
            <Section3Change/>
            <Section4Change/>
            <Section5Change/>
            <Section6Change/> 
            <Section7Change/>
            <Section8Change/>
            <Footer/>
        </React.Fragment>
    )
    
 
}