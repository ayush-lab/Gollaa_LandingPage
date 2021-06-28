import React from 'react';
import Navbar from '../../components/LandingPage/Navbar/Navbar';
import StoriesSections from '../../components/Stories/Stories'; 
import Footer from '../../components/LandingPage/Footer/Footer';


export default function Stories(){

    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <React.Fragment>
            <Navbar/>
            <StoriesSections/>
            <Footer/>
        </React.Fragment>
    )
    
 
}