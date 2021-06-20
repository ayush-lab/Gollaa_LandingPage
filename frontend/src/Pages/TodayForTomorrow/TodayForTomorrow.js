import React from 'react';
import Navbar from '../../components/LandingPage/Navbar/Navbar';
import Section1Today from '../../components/TodayForTomorrow/Section1/Section1';
import Section2Today from '../../components/TodayForTomorrow/Section2/Section2';
import Section3Today from '../../components/TodayForTomorrow/Section3/Section3';
import Section4Today from '../../components/TodayForTomorrow/Section4/Section4';
import Section5Today from '../../components/TodayForTomorrow/Section5/Section5';
import Section6Today from '../../components/TodayForTomorrow/Section6/Section6';

import Footer from '../../components/LandingPage/Footer/Footer';


export default function TodayForTomorrow(){

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <React.Fragment>
            <Navbar/>
            <Section1Today/>
            <Section2Today/>
            <Section3Today/>
            <Section4Today/>
            <Section5Today/>
            <Section6Today/>
            <Footer/>
        </React.Fragment>
    )
    
 
}