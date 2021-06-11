import React from 'react';
import Gollaa_logo from '../../../assets/images/Gollaa_logo.svg';
// import Menu from '../../../assets/images/Menu.svg';

export default function Navbar(){

    const [open,setOpen] = React.useState(false);

    React.useEffect(() => {
        let handler = (event) => {
          if (!navNode.current.contains(event.target) && !toggler.current.contains(event.target)) {
            setOpen(false);
          }
        };
        document.addEventListener("mousedown", handler);
        return () => {
          document.removeEventListener("mousedown", handler);
        };
      }, []);
    
      let navNode = React.useRef();
      let toggler = React.useRef();

    return(
        <React.Fragment>
            <div className="Navbar">

                <div className="Navbar-logo">
                    <img src={Gollaa_logo} alt="Golla_logo" />
                </div>

                <div  className="Navbar-menu">
                    {/* <img src={Menu} alt="Menu_toggler" /> */}
                    <div ref={toggler} onClick={()=>setOpen(prevState=>!prevState)} className='Navbar-menu-box'>
                        <div className={open ? 'Navbar-menu-box-open-line2' : 'Navbar-menu-box-line2'}></div>
                    </div>

                    <div ref={navNode} className={open ? "Navbar-menu-options" : "Navbar-menu-none"}>
                        <ul className={open ? "Navbar-menu-options-list" : "Navbar-menu-none-list"}>
                            <li>Blog</li>
                            <li>Our Stories</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )

}