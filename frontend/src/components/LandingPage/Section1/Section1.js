import React,{useState,useRef} from 'react';
import Cross from '../../../assets/images/Cross.svg'
import Gollaa_Shop from '../../../assets/images/Shop_Illustration.svg';
import Gollaa_text from '../../../assets/images/Gollaa.svg';
import Gollaa_Grow from '../../../assets/images/GollaaGrow_illustration.svg';
import Gollaa_Support from '../../../assets/images/Support_Illustration.svg';
import Gollaa_Stay from '../../../assets/images/Stay Illustration.svg';
import Gollaa_Trade from '../../../assets/images/Gollaa Trade Illustration.svg';

export default function Section1(){

  const [shop,shopHandler] = useState({shopOpen:false,shopHover:false});
  const [grow,growHandler] = useState({growOpen:false,growHover:false});
  const [support,supportHandler] = useState({supportOpen:false,supportHover:false});
  const [stay,stayHandler] = useState({stayOpen:false,stayHover:false});


  const shopFullScreen=()=>{
    shopHandler(prevState=>({...prevState,shopOpen:!prevState.shopOpen}))
  }
  const growFullScreen=()=>{
    growHandler(prevState=>({...prevState,growOpen:!prevState.growOpen}))
  }
  const supportFullScreen=()=>{
    supportHandler(prevState=>({...prevState,supportOpen:!prevState.supportOpen}))
  }
  const stayFullScreen=()=>{
    stayHandler(prevState=>({...prevState,stayOpen:!prevState.stayOpen}))
  }

  const shopBackToNormalScreen=()=>{
    let timeout = null;
    shopRef.current.classList.add('Section1-row1-shopClosed');
    shopFullScreenText.current.classList.add('Section1-row1-shopClosed-textBlock');

    if(timeout){
        clearTimeout(timeout)
        timeout=null;
    }
    setTimeout(()=>{
        shopRef.current.classList.remove('Section1-row1-shopClosed')
        shopHandler(prevState=>({...prevState,shopOpen:!prevState.shopOpen}))
        
    },1500)
  }

  const growBackToNormalScreen=()=>{
    let timeout = null;
    growRef.current.classList.add('Section1-row1-growClosed');
    growFullScreenText.current.classList.add('Section1-row1-growClosed-textBlock');

    if(timeout){
        clearTimeout(timeout)
        timeout=null;
    }
    setTimeout(()=>{
        growRef.current.classList.remove('Section1-row1-growClosed')
        growHandler(prevState=>({...prevState,growOpen:!prevState.growOpen}))
        
    },1500)
  }

  const supportBackToNormalScreen=()=>{
    let timeout = null;
    supportRef.current.classList.add('Section1-row1-supportClosed');
    supportFullScreenText.current.classList.add('Section1-row1-supportClosed-textBlock');

    if(timeout){
        clearTimeout(timeout)
        timeout=null;
    }
    setTimeout(()=>{
        supportRef.current.classList.remove('Section1-row1-supportClosed')
        supportHandler(prevState=>({...prevState,supportOpen:!prevState.supportOpen}))
        
    },1500)
  }

//   const stayBackToNormalScreen=()=>{
//     let timeout = null;
//     stayRef.current.classList.add('Section1-row1-stayClosed');
//     stayFullScreenText.current.classList.add('Section1-row1-stayClosed-textBlock');

//     if(timeout){
//         clearTimeout(timeout)
//         timeout=null;
//     }
//     setTimeout(()=>{
//         stayRef.current.classList.remove('Section1-row1-stayClosed')
//         stayHandler(prevState=>({...prevState,supportOpen:!prevState.stayOpen}))
        
//     },1500)
//   }

  let shopRef=useRef();
  let shopFullScreenText=useRef();


  let growRef=useRef();
  let growFullScreenText=useRef();

  let supportRef=useRef();
  let supportFullScreenText=useRef();


  console.log(shop)

    return(
        <React.Fragment>
            <div className="Section1">
                <div className="Section1-row1">
                    {/* shop card */}
                    <div className={shop.shopOpen ? "Section1-row1-dummyShop" : "displayNone"}></div>

                    <div onMouseEnter={()=>{shopHandler(prevState=>({...prevState,shopHover:true}))}}
                         onMouseLeave={()=>{shopHandler(prevState=>({...prevState,shopHover:false}))}} 
                         ref={shopRef} className={shop.shopOpen ? "Section1-row1-shopOpen" : "Section1-row1-shop"}>
                        
                        <span className={shop.shopOpen ? "Section1-row1-shopOpen-cross" : "displayNone"} onClick={shopBackToNormalScreen} >
                              <img  src={Cross} alt="Overlay-cross"/>
                        </span>

                        <span className="Section1-row1-shop-image">
                            <img src={Gollaa_Shop}  alt="Gollaa_shop" />
                        </span>

                        {/* Normal screen block ( No Modal ) */}
                        <div className={shop.shopOpen ? "displayNone" : "Section1-row1-shop-text"}>
                            <div className="Section1-row1-shop-text-Gollaa">
                                <img  className="Section1-row1-shop-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-shop-text-Gollaa-heading" >SHOP</span>
                            </div>
                            <p className="Section1-row1-shop-text-subheading" >Let's buy what is <br/> truly natural</p>
                            <div className={shop.shopHover ? "maxOpacity" : "Section1-row1-shop-text-app"}>
                                <button>Download App</button>
                                <span onClick={()=>shopFullScreen()}>See More</span>
                            </div>
                        </div>

                        {/* Full screen  */}
                        <div ref={shopFullScreenText} className={shop.shopOpen ? "Section1-row1-shopOpen-textBlock " : "displayNone"} >
                            <div className="Section1-row1-shopOpen-textBlock-Gollaa">
                                <img  className="Section1-row1-shopOpen-textBlock-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-shopOpen-textBlock-Gollaa-heading" >SHOP</span>
                            </div>
                            <p className="Section1-row1-shopOpen-textBlock-subheading1" >Your partner on the journey of sourcing fresh 
                            and authentic products directly from local businesses.</p>

                            <p className="Section1-row1-shopOpen-textBlock-subheading2" >In our pursuit to establish a circular economy, 
                            help farmers and artisans deliver their quality products directly to the end consumers.</p>

                            <p className="Section1-row1-shopOpen-textBlock-subheading3" > Gollaa is a powerful platform dedicated to helping our real
                             heroes- the farmers generate profits from their product without having to deal with any middlemen. 
                             We are transforming how people shop by making the entire process, right from production to delivery, 
                             completely transparent. This reassurance makes for a remarkable shopping experience for the users, as well as a secure 
                             way of selling for the farmers. Not only this, 
                            Gollaa’s model is a step towards sustainability and ecological consciousness.</p>

                            <div className= "Section1-row1-shopOpen-textBlock-app">
                                <button>Download App</button>
                            </div>
                        </div>
                        <div className={shop.shopHover ? "overlay-come": "overlay-exit"}></div>
                 </div>
                 
                 {/* grow card */}
                    <div className={grow.growOpen ? "Section1-row1-dummyGrow" : "displayNone"}></div>

                    <div onMouseEnter={()=>{growHandler(prevState=>({...prevState,growHover:true}))}}
                         onMouseLeave={()=>{growHandler(prevState=>({...prevState,growHover:false}))}} 
                         ref={growRef} className={grow.growOpen ? "Section1-row1-growOpen" : "Section1-row1-grow"}>


                        <span className={grow.growOpen ? "Section1-row1-growOpen-cross" : "displayNone"} onClick={growBackToNormalScreen} >
                              <img  src={Cross} alt="Overlay-cross"/>
                        </span>

                         {/* Normal screen block ( No Modal ) */}

                        <div className={grow.growOpen ? "displayNone" : "Section1-row1-grow-text"}>
                            <div className="Section1-row1-grow-text-Gollaa">
                                <img  className="Section1-row1-grow-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-grow-text-Gollaa-heading" >Grow</span>
                            </div>
                            <p className="Section1-row1-grow-text-subheading">Accelerate your <br/> jouney to success</p>
                            <div className={grow.growHover ? "maxOpacity" : "Section1-row1-grow-text-app"}>
                                <button>Sign in</button>
                                <span onClick={()=>growFullScreen()}>See More</span>
                            </div>
                        </div>

                        <div ref={growFullScreenText} className={grow.growOpen ? "Section1-row1-growOpen-textBlock " : "displayNone"} >
                           
                            <div className="Section1-row1-growOpen-textBlock-Gollaa">
                                <img  className="Section1-row1-growOpen-textBlock-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-growOpen-textBlock-Gollaa-heading" >Grow</span>
                            </div>
                           <p className="Section1-row1-growOpen-textBlock-subheading1" >Your partner on the journey of sourcing fresh 
                           and authentic products directly from local businesses.</p>

                           <p className="Section1-row1-growOpen-textBlock-subheading2" >In our pursuit to establish a circular economy, 
                           help farmers and artisans deliver their quality products directly to the end consumers.</p>

                           <p className="Section1-row1-growOpen-textBlock-subheading3" > Gollaa is a powerful platform dedicated to helping our real
                            heroes- the farmers generate profits from their product without having to deal with any middlemen. 
                            We are transforming how people shop by making the entire process, right from production to delivery, 
                            completely transparent. This reassurance makes for a remarkable shopping experience for the users, as well as a secure 
                            way of selling for the farmers. Not only this, 
                           Gollaa’s model is a step towards sustainability and ecological consciousness.</p>


                           <div className= "Section1-row1-growOpen-textBlock-app">
                               <button>Download App</button>
                           </div>
                       </div>

                        <div  className="Section1-row1-grow-image">
                            <img src={Gollaa_Grow}  alt="Gollaa_grow" />
                        </div>

                        <div className={grow.growHover ? "overlay-come": "overlay-exit"}></div>
                    </div>
                


                    {/* support card */}
                    <div className={support.supportOpen ? "Section1-row1-dummySupport" : "displayNone"}></div>
                    
                    <div onMouseEnter={()=>{supportHandler(prevState=>({...prevState,supportHover:true}))}}
                         onMouseLeave={()=>{supportHandler(prevState=>({...prevState,supportHover:false}))}} 
                         ref={supportRef} className={support.supportOpen ? "Section1-row1-supportOpen" : "Section1-row1-support"}>

                        <span className={support.supportOpen ? "Section1-row1-supportOpen-cross" : "displayNone"}
                              onClick={supportBackToNormalScreen} >
                              <img  src={Cross} alt="Overlay-cross"/>
                        </span>

                        <div className={support.supportOpen ? "displayNone" : "Section1-row1-support-text"}>
                            <div className="Section1-row1-support-text-Gollaa">
                                <img  className="Section1-row1-support-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-support-text-Gollaa-heading" >Support</span>
                            </div>
                            <p className="Section1-row1-support-text-subheading">Extending Support to <br/> local Communities</p>
                            <div className={support.supportHover ? "maxOpacity" : "Section1-row1-support-text-app"}>
                                <span onClick={()=>supportFullScreen()}>See More</span>
                            </div>
                        </div>

                        <div ref={supportFullScreenText} className={support.supportOpen ? "Section1-row1-supportOpen-textBlock " : "displayNone"} >
                           
                           <div className="Section1-row1-supportOpen-textBlock-Gollaa">
                               <img  className="Section1-row1-supportOpen-textBlock-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                               <span className="Section1-row1-supportOpen-textBlock-Gollaa-heading" >Support</span>
                           </div>
                          <p className="Section1-row1-supportOpen-textBlock-subheading1" >Your partner on the journey of sourcing fresh 
                          and authentic products directly from local businesses.</p>

                          <p className="Section1-row1-supportOpen-textBlock-subheading2" >In our pursuit to establish a circular economy, 
                          help farmers and artisans deliver their quality products directly to the end consumers.</p>

                          <p className="Section1-row1-supportOpen-textBlock-subheading3" > Gollaa is a powerful platform dedicated to helping our real
                           heroes- the farmers generate profits from their product without having to deal with any middlemen. 
                           We are transforming how people shop by making the entire process, right from production to delivery, 
                           completely transparent. This reassurance makes for a remarkable shopping experience for the users, as well as a secure 
                           way of selling for the farmers. Not only this, 
                          Gollaa’s model is a step towards sustainability and ecological consciousness.</p>


                      </div>

                        <div className="Section1-row1-support-image">
                            <img src={Gollaa_Support}  alt="Gollaa_support" />
                        </div>
                        <div className={support.supportHover ? "overlay-come": "overlay-exit"}></div>
                        
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