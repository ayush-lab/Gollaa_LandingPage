import React from 'react';
import Navbar from '../../../components/LandingPage/Navbar/Navbar';
import Footer from '../../../components/LandingPage/Footer/Footer';
import CitySection1 from '../../../components/Blog/City/City';



export default function City(){

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <React.Fragment>
            <Navbar/>
            <CitySection1/>
            <Footer/>
        </React.Fragment>
    )
    
 
}