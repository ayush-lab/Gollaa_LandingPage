import React from 'react';
import Navbar from '../../components/LandingPage/Navbar/Navbar';
import Footer from '../../components/LandingPage/Footer/Footer';
import Aboutus from '../../components/AboutUs/AboutUs'; 

export default function AboutUs(){

    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <Navbar/>
            <Aboutus/>
            <Footer/>
        </React.Fragment>
    )
    
 
}