import React from 'react';
import {NavLink,Link} from 'react-router-dom';
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
        <div style={{marginBottom:'80px'}}>
            <div className="Navbar">

                <div className="Navbar-logo">
                    <Link className="link" to="/home">
                        <img src={Gollaa_logo} alt="Golla_logo" />
                    </Link>
                </div>

                <div  className="Navbar-menu">
                    {/* <img src={Menu} alt="Menu_toggler" /> */}
                    <div ref={toggler} onClick={()=>setOpen(prevState=>!prevState)} className='Navbar-menu-box'>
                        <div className={open ? 'Navbar-menu-box-open-line2' : 'Navbar-menu-box-line2'}></div>
                    </div>

                    <div ref={navNode} className={open ? "Navbar-menu-options" : "Navbar-menu-none"}>
                        <ul className={open ? "Navbar-menu-options-list" : "Navbar-menu-none-list"}>
                            <NavLink activeClassName="activeClassName" className="link" to="/blog"><li>Blog</li></NavLink>
                            <li>Our Stories</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )

}