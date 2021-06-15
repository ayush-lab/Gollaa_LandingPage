import React,{useState} from 'react';
import Gollaa_Shop from '../../../assets/images/Shop_Illustration.svg';
import Gollaa_text from '../../../assets/images/Gollaa.svg';
import Gollaa_Grow from '../../../assets/images/GollaaGrow_illustration.svg';
import Gollaa_Support from '../../../assets/images/Support_Illustration.svg';
import Gollaa_Stay from '../../../assets/images/Stay Illustration.svg';
import Gollaa_Trade from '../../../assets/images/Gollaa Trade Illustration.svg';

export default function Section1(){

  const [shopOpen,shopToggler] = useState(false);

  const openFirst = {
      position:'absolute',
      width:'30px',
      height:'30px'
  }
  const openSecond = {
    position:'absolute',
    width:'100vw',
    height:'100vh',
  }

  const Toggler=()=>{
    shopToggler(prevState=>!prevState);
    
   
  }


    return(
        <React.Fragment>
            <div className="Section1">
                <div className="Section1-row1">
                  {/* <div className={shopOpen ? "Section1-row1-shopOpen" : "Section1-row1-shop"}> */}
                    {/* <div className={shopOpen ? "Section1-row1-shopOpen" : "Section1-row1-shop"}> */}
                    <div  className={shopOpen ? "Section1-row1-shopOpen" : "Section1-row1-shop"}>
                        <div className="Section1-row1-shop-image">
                            <img src={Gollaa_Shop}  alt="Gollaa_shop" />
                        </div>
                        <div className="Section1-row1-shop-text">
                            <div className="Section1-row1-shop-text-Gollaa">
                                <img  className="Section1-row1-shop-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-shop-text-Gollaa-heading" >SHOP</span>
                            </div>
                            <p className="Section1-row1-shop-text-subheading" >Let's buy what is <br/> truly natural</p>
                            <div className="Section1-row1-shop-text-app">
                                <button>Download App</button>
                                <span onClick={()=>Toggler()}>See More</span>
                            </div>
                        </div>
                    {/* </div> */}
                 </div>

                    <div className= "Section1-row1-grow">

                        <div  className="Section1-row1-grow-text">
                            <div className="Section1-row1-grow-text-Gollaa">
                                <img  className="Section1-row1-grow-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-grow-text-Gollaa-heading" >Grow</span>
                            </div>
                            <p className="Section1-row1-grow-text-subheading">Accelerate your <br/> jouney to success</p>
                            <div className="Section1-row1-grow-text-app">
                                <button>Download App</button>
                                <span>See More</span>
                            </div>
                        </div>

                        <div  className="Section1-row1-grow-image">
                            <img src={Gollaa_Grow}  alt="Gollaa_grow" />
                        </div>
                    </div>
                


                {/* <div className="Section1-row1"> */}

                    <div className="Section1-row1-support">

                        <div className="Section1-row1-support-text">
                            <div className="Section1-row1-support-text-Gollaa">
                                <img  className="Section1-row1-support-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-support-text-Gollaa-heading" >Support</span>
                            </div>
                            <p className="Section1-row1-support-text-subheading">Extending Support to <br/> local Communities</p>
                            <div className="Section1-row1-support-text-app">
                                <button>Download App</button>
                                <span>See More</span>
                            </div>
                        </div>

                        <div className="Section1-row1-support-image">
                            <img src={Gollaa_Support}  alt="Gollaa_support" />
                        </div>
                    </div>


                    <div className="Section1-row1-stay">

                        <div className="Section1-row1-stay-text">
                            <div className="Section1-row1-stay-text-Gollaa">
                                <img  className="Section1-row1-stay-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-stay-text-Gollaa-heading">Stay</span>
                            </div>
                            <p className="Section1-row1-stay-text-subheading">Replenish and recharge <br/> in nature's lap</p>
                            <div className="Section1-row1-stay-text-app">
                                <button>Download App</button>
                                <span>See More</span>
                            </div>
                        </div>

                        <div className="Section1-row1-stay-image">
                            <img src={Gollaa_Stay}  alt="Gollaa_stay" />
                        </div>
                    </div>


                      <div className="Section1-row1-trade">

                        <div className="Section1-row1-trade-text">
                            <div className="Section1-row1-trade-text-Gollaa">
                                <img  className="Section1-row1-trade-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-trade-text-Gollaa-heading" >Trade</span>
                            </div>
                            <p className="Section1-row1-trade-text-subheading">Be a part of a Collaborative <br/>economy</p>
                            <div className="Section1-row1-trade-text-app">
                                <button>Download App</button>
                                <span>See More</span>
                            </div>
                        </div>

                        <div className="Section1-row1-trade-image">
                            <img src={Gollaa_Trade}  alt="Gollaa_trade" />
                        </div>
                    </div>
                    

                </div>


            </div>
        </React.Fragment>
    )

}