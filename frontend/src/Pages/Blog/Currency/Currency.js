import React from 'react';
import Navbar from '../../../components/LandingPage/Navbar/Navbar';
import Footer from '../../../components/LandingPage/Footer/Footer';
import CurrencySections from '../../../components/Blog/Currency/Currency';


export default function Currency(){

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <React.Fragment>
            <Navbar/>
            <CurrencySections/>
            <Footer/>
        </React.Fragment>
    )
    
 
}