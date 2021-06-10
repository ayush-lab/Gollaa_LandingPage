import React from 'react';
import Gollaa_logo from '../../../assets/images/Gollaa_logo.svg';
import Menu from '../../../assets/images/Menu.svg';

export default function Navbar(){

    return(
        <React.Fragment>
            <div className="Navbar">

                <div className="Navbar-logo">
                    <img src={Gollaa_logo} alt="Golla_logo" />
                </div>

                <div className="Navbar-menu">
                    <img src={Menu} alt="Menu_toggler" />
                </div>
                
            </div>
        </React.Fragment>
    )

}