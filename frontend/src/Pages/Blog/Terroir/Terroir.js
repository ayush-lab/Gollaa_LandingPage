import React from 'react';
import Navbar from '../../../components/LandingPage/Navbar/Navbar';
import Footer from '../../../components/LandingPage/Footer/Footer';
import TerroirSection1 from '../../../components/Blog/Terroir/Section1';
import TerroirSection2 from '../../../components/Blog/Terroir/Section2';
import TerroirSection3 from '../../../components/Blog/Terroir/Section3';
import TerroirSection4 from '../../../components/Blog/Terroir/Section4';


export default function Blog(){

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <React.Fragment>
            <Navbar/>
            <TerroirSection1/>
            <TerroirSection2/>
            <TerroirSection3/>
            <TerroirSection4/>
            <Footer/>
        </React.Fragment>
    )
    
 
}