import React from 'react';
import Navbar from '../../components/LandingPage/Navbar/Navbar';
import Footer from '../../components/LandingPage/Footer/Footer';
import Main from '../../components/Blog/Main/main';

export default function Blog(){

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <React.Fragment>
            <Navbar/>
            <Main/>
            <Footer/>
        </React.Fragment>
    )
    
 
}