import React,{useState,useRef} from 'react';
import Cross from '../../../assets/images/Cross.svg'
import Gollaa_text from '../../../assets/images/Gollaa.svg';
import Gollaa_text_white from '../../../assets/images/WhiteLogo.svg';
import Gollaa_Shop from '../../../assets/images/Shop_Illustration.svg';
import Gollaa_Grow from '../../../assets/images/GollaaGrow_illustration.svg';
import Gollaa_Support from '../../../assets/images/Support_Illustration.svg';
import Gollaa_Stay from '../../../assets/images/Stay Illustration.png';
import Gollaa_Trade from '../../../assets/images/Gollaa Trade Illustration.svg';
import Modal from 'react-bootstrap/Modal'

export default function Section1(){

  const [shop,shopHandler] = useState({shopOpen:false,shopHover:false,shopClicked:false,shopClosedClick:false,shopModal:false});
  const [grow,growHandler] = useState({growOpen:false,growHover:false,growClicked:false,growClosedClick:false,growModal:false});
  const [support,supportHandler] = useState({supportOpen:false,supportHover:false,supportClicked:false,supportClosedClick:false,supportModal:false});
  const [stay,stayHandler] = useState({stayOpen:false,stayHover:false,stayClicked:false,stayClosedClick:false,stayModal:false});
  const [trade,tradeHandler] = useState({tradeOpen:false,tradeHover:false,tradeClicked:false,tradeClosedClick:false,tradeModal:false});



  const shopFullScreen=()=>{
    var windowWidth = window.matchMedia("(max-width: 900px)") 
    if(!windowWidth.matches){
        windowWidth = window.matchMedia("(max-height: 600px)") 
    }
    if(windowWidth.matches){
        shopHandler(prevState=>({...prevState,shopModal:true}));
    }

    else shopHandler(prevState=>({...prevState,shopOpen:!prevState.shopOpen,shopClicked:!prevState.shopClicked}))
  }


  const growFullScreen=()=>{
    var windowWidth = window.matchMedia("(max-width: 900px)")
    if(!windowWidth.matches){
        windowWidth = window.matchMedia("(max-height: 600px)") 
    }
    if(windowWidth.matches){
        growHandler(prevState=>({...prevState,growModal:true}));
    }
    else
        growHandler(prevState=>({...prevState,growOpen:!prevState.growOpen,growClicked:!prevState.growClicked}))
  }


  const supportFullScreen=()=>{
    var windowWidth = window.matchMedia("(max-width: 900px)")
    if(!windowWidth.matches){
        windowWidth = window.matchMedia("(max-height: 600px)") 
    }
    if(windowWidth.matches){
        supportHandler(prevState=>({...prevState,supportModal:true}));
    }
    else
        supportHandler(prevState=>({...prevState,supportOpen:!prevState.supportOpen,supportClicked:!prevState.supportClicked}))
  }

  const stayFullScreen=()=>{
    var windowWidth = window.matchMedia("(max-width: 900px)")
    if(!windowWidth.matches){
        windowWidth = window.matchMedia("(max-height: 600px)") 
    }
    if(windowWidth.matches){
        stayHandler(prevState=>({...prevState,stayModal:true}));
    }
    else 
        stayHandler(prevState=>({...prevState,stayOpen:!prevState.stayOpen,stayClicked:!prevState.stayClicked}))
  }

  const tradeFullScreen=()=>{
    var windowWidth = window.matchMedia("(max-width: 900px)")
    if(!windowWidth.matches){
        windowWidth = window.matchMedia("(max-height: 600px)") 
    }
    if(windowWidth.matches){
        tradeHandler(prevState=>({...prevState,tradeModal:true}));
    }
    else
        tradeHandler(prevState=>({...prevState,tradeOpen:!prevState.tradeOpen,tradeClicked:!prevState.tradeClicked}))
  }

  const shopBackToNormalScreen=()=>{
    let timeout = null;
    // shopRef.current.classList.remove('Section1-row1-shopOpen');
    shopRef.current.classList.add('Section1-row1-shopClosed');
    shopFullScreenText.current.classList.add('Section1-row1-shopClosed-textBlock');
    // shopFullScreenText.current.classList.add('Section1-row1-shopClosed-textBlock');
    shopHandler(prevState=>({...prevState,shopClosedClick:true}))



    if(timeout){
        clearTimeout(timeout)
        timeout=null;
    }
    setTimeout(()=>{
        shopRef.current.classList.remove('Section1-row1-shopClosed')
        shopFullScreenText.current.classList.remove('Section1-row1-shopClosed-textBlock');
        shopHandler(prevState=>({...prevState,shopOpen:!prevState.shopOpen,shopClicked:!prevState.shopClicked,shopClosedClick:!prevState.shopClicked}))
        
    },1500)
  }

  const closeModalShop=()=>{
    shopHandler(prevState=>({...prevState,shopModal:false}))
  } 
  const closeModalGrow=()=>{
    growHandler(prevState=>({...prevState,growModal:false}))
  } 
   const closeModalSupport=()=>{
    supportHandler(prevState=>({...prevState,supportModal:false}))
  } 
  const closeModalStay=()=>{
    stayHandler(prevState=>({...prevState,stayModal:false}))
  } 
  const closeModalTrade=()=>{
    tradeHandler(prevState=>({...prevState,tradeModal:false}))
  } 


  const growBackToNormalScreen=()=>{
    let timeout = null;
    growRef.current.classList.add('Section1-row1-growClosed');
    growFullScreenText.current.classList.add('Section1-row1-growClosed-textBlock');
    growHandler(prevState=>({...prevState,growClosedClick:true}))

    if(timeout){
        clearTimeout(timeout)
        timeout=null;
    }
    setTimeout(()=>{
        growRef.current.classList.remove('Section1-row1-growClosed')
        growRef.current.classList.remove('Section1-row1-growClosed-textBlock')
        growHandler(prevState=>({...prevState,growOpen:!prevState.growOpen,growClicked:!prevState.growClicked,growClosedClick:!prevState.growClicked}))
        
    },1400)
  }

  const supportBackToNormalScreen=()=>{
    let timeout = null;
    supportRef.current.classList.add('Section1-row1-supportClosed');
    // supportRef.current.classList.add('Section1-row1-supportClosed-textBlock');
    supportFullScreenText.current.classList.add('Section1-row1-supportClosed-textBlock');
    supportHandler(prevState=>({...prevState,supportClosedClick:true}))

    if(timeout){
        clearTimeout(timeout)
        timeout=null;
    }
    setTimeout(()=>{
        supportRef.current.classList.remove('Section1-row1-supportClosed')
        supportFullScreenText.current.classList.remove('Section1-row1-supportClosed-textBlock')
        supportHandler(prevState=>({...prevState,supportOpen:!prevState.supportOpen,supportClicked:!prevState.supportClicked,supportClosedClick:!prevState.supportClicked}))
        
    },1500)
  }

  const stayBackToNormalScreen=()=>{
    let timeout = null;
    stayRef.current.classList.add('Section1-row1-stayClosed');
    stayFullScreenText.current.classList.add('Section1-row1-stayClosed-textBlock');
    stayHandler(prevState=>({...prevState,stayClosedClick:true}))

    if(timeout){
        clearTimeout(timeout)
        timeout=null;
    }
    setTimeout(()=>{
        stayRef.current.classList.remove('Section1-row1-stayClosed')
        stayHandler(prevState=>({...prevState,stayOpen:!prevState.stayOpen,stayClicked:!prevState.stayClicked,stayClosedClick:!prevState.stayClicked}))
        
    },1500)
  }

  const tradeBackToNormalScreen=()=>{
    let timeout = null;
    tradeRef.current.classList.add('Section1-row1-tradeClosed');
    tradeFullScreenText.current.classList.add('Section1-row1-tradeClosed-textBlock');
    tradeHandler(prevState=>({...prevState,tradeClosedClick:true}))

    if(timeout){
        clearTimeout(timeout)
        timeout=null;
    }
    setTimeout(()=>{
        tradeRef.current.classList.remove('Section1-row1-tradeClosed')
        tradeFullScreenText.current.classList.remove('Section1-row1-tradeClosed-textBlock');
        tradeHandler(prevState=>({...prevState,tradeOpen:!prevState.tradeOpen,tradeClicked:!prevState.tradeClicked,tradeClosedClick:!prevState.tradeClicked}))
        
    },1500)
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize)

    return ()=>{
        window.removeEventListener('resize')
    }
  },[])

   const handleResize = ()=>{
  
    shopHandler(prevState=>({...prevState,shopOpen:false,shopClicked:false,shopClosedClick:false}))
    growHandler(prevState=>({...prevState,growOpen:false,growClicked:false,growClosedClick:false}))
    stayHandler(prevState=>({...prevState,stayOpen:false,stayClicked:false,stayClosedClick:false}))
    supportHandler(prevState=>({...prevState,supportOpen:false,supportClicked:false,supportClosedClick:false}))
    tradeHandler(prevState=>({...prevState,tradeOpen:false,tradeClicked:false,tradeClosedClick:false}))
  
}

  let shopRef=useRef();
  let shopFullScreenText=useRef();


  let growRef=useRef();
  let growFullScreenText=useRef();

  let supportRef=useRef();
  let supportFullScreenText=useRef();


  let stayRef=useRef();
  let stayFullScreenText=useRef();


  let tradeRef=useRef();
  let tradeFullScreenText=useRef();

  let overlayShop = []
  let overlayGrow = []
  let overlaySupport=[]
  let overlayStay=[];
  let overlayTrade=[];


  if(shop.shopHover && !shop.shopClicked){
      overlayShop = ["overlay-come"]
  }
  if(!shop.shopHover){
      overlayShop = ["overlay-exit"];
  }
  if(shop.shopClicked){
      overlayShop=["overlay-motion"]
  }
  if(shop.shopOpen){
    document.querySelector("html").style.overflow = "hidden";
  }
  
  if(shop.shopClosedClick){
    overlayShop=["overlay-come"]
    document.querySelector("html").style.overflow = "auto";
  }

    // grow

   if(grow.growHover && !grow.growClicked){
       overlayGrow = ["overlay-come"]
   }
   if(!grow.growHover){
       overlayGrow = ["overlay-exit"];
   }
   if(grow.growClicked){
       overlayGrow=["overlay-motion"]
   }
   if(grow.growOpen){
   document.querySelector("html").style.overflow = "hidden";
   }     
   if(grow.growClosedClick){
   overlayGrow=["overlay-come"]
   document.querySelector("html").style.overflow = "auto";
   }     
   
   // support

   if(support.supportHover && !support.supportClicked){
    overlaySupport = ["overlay-come"]
    }
    if(!support.supportHover){
        overlaySupport = ["overlay-exit"];
    }
    if(support.supportClicked){
        overlaySupport=["overlay-motion"]
    }
    if(support.supportOpen){
    document.querySelector("html").style.overflow = "hidden";
    }     
    if(support.supportClosedClick){
        overlaySupport=["overlay-come"]
        document.querySelector("html").style.overflow = "auto";
    }  


   // stay

   if(stay.stayHover && !stay.stayClicked){
    overlayStay = ["overlay-come"]
    }
    if(!stay.stayHover){
        overlayStay = ["overlay-exit"];
    }
    if(stay.stayClicked){
        overlayStay=["overlay-motion"]
    }
    if(stay.stayOpen){
        document.querySelector("html").style.overflow = "hidden";
    }     
    if(stay.stayClosedClick){
        overlayStay=["overlay-come"]
        document.querySelector("html").style.overflow = "auto";
    }  

     // Trade

   if(trade.tradeHover && !trade.tradeClicked){
    overlayTrade = ["overlay-come"]
    }
    if(!trade.tradeHover){
        overlayTrade = ["overlay-exit"];
    }
    if(trade.tradeClicked){
        overlayTrade=["overlay-motion"]
    }
    if(trade.tradeOpen){
        document.querySelector("html").style.overflow = "hidden";
    }     
    if(trade.tradeClosedClick){
        overlayTrade=["overlay-come"]
        document.querySelector("html").style.overflow = "auto";
    }  



    return(
        <React.Fragment>
            <div className="Section1">
                <div className="Section1-row1">
                    {/* shop card */}
                    <div className={shop.shopOpen ? "Section1-row1-dummyShop" : "displayNone"}></div>

                    <div onMouseEnter={()=>{shopHandler(prevState=>({...prevState,shopHover:true}))}}
                         onMouseLeave={()=>{shopHandler(prevState=>({...prevState,shopHover:false}))}} 
                         ref={shopRef} className={shop.shopOpen ? "Section1-row1-shopOpen" : "Section1-row1-shop"}>
                        
                        <span className={shop.shopOpen ? "Section1-row1-shopOpen-cross" : "cross-disappear"}
                              onClick={shopBackToNormalScreen} >
                              <img  src={Cross} alt="Overlay-cross"/>
                        </span>

                        <span className={shop.shopOpen ? "Section1-row1-shopOpen-image" : "Section1-row1-shop-image"} >
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
                        <div className={overlayShop.join('')}></div>
                 </div>
                 
                 {/* grow card */}
                    <div className={grow.growOpen ? "Section1-row1-dummyGrow" : "displayNone"}></div>

                    <div onMouseEnter={()=>{growHandler(prevState=>({...prevState,growHover:true}))}}
                         onMouseLeave={()=>{growHandler(prevState=>({...prevState,growHover:false}))}} 
                         ref={growRef} className={grow.growOpen ? "Section1-row1-growOpen" : "Section1-row1-grow"}>


                        <span className={grow.growOpen ? "Section1-row1-growOpen-cross" : "cross-disappear"} onClick={growBackToNormalScreen} >
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

                        <div ref={growFullScreenText} className={grow.growOpen ? "Section1-row1-growOpen-ParentTextBlock " : "displayNone"} >
                           <div className={"Section1-row1-growOpen-textBlock"}>
                                <div className="Section1-row1-growOpen-textBlock-Gollaa">
                                    <img  className="Section1-row1-growOpen-textBlock-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                    <span className="Section1-row1-growOpen-textBlock-Gollaa-heading" >Grow</span>
                                </div>
                                <p className="Section1-row1-growOpen-textBlock-subheading1" >Accelerate your jouney to success.</p>

                                <p className="Section1-row1-growOpen-textBlock-subheading2" >(Say goodbye to intermediaries and reach consumers directly through Gollaa) 
                                Gollaa concept relies on peer-to-peer support extended between communities of farmers and local business owners. You can join us if you wish to step up your presence 
                                in the community and be amongst strong peer who support and help each other grow.</p>

                                <p className="Section1-row1-growOpen-textBlock-subheading3" >
                                We help local farmers and artisans, diversify their activities to become the environment and human activities to create a sustainable future. This is done by striking an equilibrium between civilization and natural resources, something that conventional farming failed to do.
                                 If you to wish to do your part in bring about this change, sign up today!
                                </p>


                            <div className= "Section1-row1-growOpen-textBlock-app">
                                <button>Download App</button>
                            </div>
                           </div>
                       </div>

                        <div  className={grow.growOpen ? "Section1-row1-growOpen-image" : "Section1-row1-grow-image"}> 
                            <img src={Gollaa_Grow}  alt="Gollaa_grow" />
                        </div>

                        {/* <div className={grow.growHover ? "overlay-come": "overlay-exit"}></div> */}
                        <div className={overlayGrow.join('')}></div>

                    </div>
                


                    {/* support card */}
                    <div className={support.supportOpen ? "Section1-row1-dummySupport" : "displayNone"}></div>
                    
                    <div onMouseEnter={()=>{supportHandler(prevState=>({...prevState,supportHover:true}))}}
                         onMouseLeave={()=>{supportHandler(prevState=>({...prevState,supportHover:false}))}} 
                         ref={supportRef} className={support.supportOpen ? "Section1-row1-supportOpen" : "Section1-row1-support"}>

                        <span className={support.supportOpen ? "Section1-row1-supportOpen-cross" : "cross-disappear"}
                              onClick={supportBackToNormalScreen} >
                              <img  src={Cross} alt="Overlay-cross"/>
                        </span>

                        <div className={support.supportOpen ? "displayNone" : "Section1-row1-support-text"}>
                            <div className="Section1-row1-support-text-Gollaa">
                                <img  className="Section1-row1-support-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-support-text-Gollaa-heading" >Support</span>
                            </div>
                            <p className="Section1-row1-support-text-subheading">Extending Support to <br/> local Communities
                            <div className={support.supportHover ? "maxOpacity" : "Section1-row1-support-text-subheading-app"}>
                                <span onClick={()=>supportFullScreen()}>See More</span>
                            </div>
                            </p>
                        </div>

                        <div ref={supportFullScreenText} className={support.supportOpen ? "Section1-row1-supportOpen-ParentTextBlock" : "displayNone"} >
                          <div className="Section1-row1-supportOpen-textBlock">
                            <div className="Section1-row1-supportOpen-textBlock-Gollaa">
                                <img  className="Section1-row1-supportOpen-textBlock-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                <span className="Section1-row1-supportOpen-textBlock-Gollaa-heading" >Support</span>
                            </div>
                            <p className="Section1-row1-supportOpen-textBlock-subheading1" >Extending Support to local Communities</p>

                            <p className="Section1-row1-supportOpen-textBlock-subheading2" >Build resilient and conscientious communities Golllaa Support is extended to all
                                 the farmers and local businesses looking for a way to expand their horizons. By helping farmers and artisans sell directly to end consumers, we help them create 
                                better avenues for their business. Gollaa offers consulting to farmer and local businesses struggling to keep up with the market. </p>
                            

                            <p className="Section1-row1-supportOpen-textBlock-subheading3" > Our team is driven to bring a socio- economic paradigm shift in the 
                                world that we live in. Through holistic training and extensive support schemes for farmers and local business owners, our 
                                mission is to impact their lives in a way that matters.</p>

                                <div className= "Section1-row1-supportOpen-textBlock-app">
                                    <button>Download App</button>
                                </div>
                         </div>

                      </div>

                        <div className={support.supportOpen ? "Section1-row1-supportOpen-image" : "Section1-row1-support-image"}>
                            <img src={Gollaa_Support}  alt="Gollaa_support" />
                        </div>

                        <div className={overlaySupport.join('')}></div>
                        
                    </div>


                    {/* stay card */}
                    <div className={stay.stayOpen ? "Section1-row1-dummyStay" : "displayNone"}></div>
                        <div onMouseEnter={()=>{stayHandler(prevState=>({...prevState,stayHover:true}))}}
                             onMouseLeave={()=>{stayHandler(prevState=>({...prevState,stayHover:false}))}} 
                             ref={stayRef} className={stay.stayOpen ? "Section1-row1-stayOpen" : "Section1-row1-stay"}>

                            <span className={stay.stayOpen ? "Section1-row1-stayOpen-cross" : "cross-disappear"}
                                onClick={stayBackToNormalScreen} >
                                <img  src={Cross} alt="Overlay-cross"/>
                            </span>

                            <div className={stay.stayOpen ? "displayNone" : "Section1-row1-stay-text"}>
                                <div className="Section1-row1-stay-text-Gollaa">
                                    <img  className="Section1-row1-stay-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                    <img  className="Section1-row1-stay-text-Gollaa-imageWhite" src={Gollaa_text_white} alt="Golla_text"/>
                                    <span className="Section1-row1-stay-text-Gollaa-heading" >Stay</span>
                                </div>
                                <p className="Section1-row1-stay-text-subheading">Replenish and recharge <br/> in nature's lap
                                    <div className={stay.stayHover ? "maxOpacity" : "Section1-row1-stay-text-subheading-app"}>
                                        <button>Download</button>
                                        <span onClick={()=>stayFullScreen()}>See More</span>
                                    </div>
                                </p>
                            </div>
                                <div ref={stayFullScreenText} className={stay.stayOpen ? "Section1-row1-stayOpen-ParentTextBlock" : "displayNone"} >
                                    <div className="Section1-row1-stayOpen-textBlock">
                                        <div className="Section1-row1-stayOpen-textBlock-Gollaa">
                                            <img  className="Section1-row1-stayOpen-textBlock-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                            <span className="Section1-row1-stayOpen-textBlock-Gollaa-heading" >Stay</span>
                                        </div>
                                        <p className="Section1-row1-stayOpen-textBlock-subheading1" >Replenish and recharge in nature's lap</p>

                                        <p className="Section1-row1-stayOpen-textBlock-subheading2" >(Experience nature's bounty by immersing yourself in a peaceful stay at a farm) 
                                Looking for a way to get away from the never ending phone calls and emails? you have found just a right thing. Away from the 
                                hustle-bustle of city life exists the melodious chirping of birds and the rustling of leaves in the wind offering a 
                                contemplative experience. You can connect with nature and be at peace with your own self by staying at these beautiful farms.
                                 A comfortable far stay offers a rejuvenating experience to city dwellers looking to explore nature's diversity or just looking
                                  for a way to recharge themselves. </p>

                                        <p className="Section1-row1-stayOpen-textBlock-subheading3" > Farmers who wish to share their resourceful and relaxing farm spaces with the urban 
                                  population can utilize this as an opportunity to diversify their activities.</p>
                                  <div className= "Section1-row1-stayOpen-textBlock-app">
                                    <button>Download App</button>
                                 </div>
                                    </div>

                                </div>

                            <div className={stay.stayOpen ? "Section1-row1-stayOpen-image" : "Section1-row1-stay-image"}>
                                <img src={Gollaa_Stay}  alt="Gollaa_stay" />
                            </div>
                        
                            <div className={overlayStay.join('')}></div>
                    </div>



            {/* trade card */}

                    <div className={trade.tradeOpen ? "Section1-row1-dummyTrade" : "displayNone"}></div>
                        <div onMouseEnter={()=>{tradeHandler(prevState=>({...prevState,tradeHover:true}))}}
                             onMouseLeave={()=>{tradeHandler(prevState=>({...prevState,tradeHover:false}))}} 
                             ref={tradeRef} className={trade.tradeOpen ? "Section1-row1-tradeOpen" : "Section1-row1-trade"}>

                            <span className={trade.tradeOpen ? "Section1-row1-tradeOpen-cross" : "cross-disappear"}
                                onClick={tradeBackToNormalScreen} >
                                <img  src={Cross} alt="Overlay-cross"/>
                            </span>

                            <div className={trade.tradeOpen ? "displayNone" : "Section1-row1-trade-text"}>
                                <div className="Section1-row1-trade-text-Gollaa">
                                    <img  className="Section1-row1-trade-text-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                    <img  className="Section1-row1-trade-text-Gollaa-imageWhite" src={Gollaa_text_white} alt="Golla_text"/>
                                    <span className="Section1-row1-trade-text-Gollaa-heading" >Trade</span>
                                </div>
                                <p className="Section1-row1-trade-text-subheading">Be a part of a Collaborative <span>economy</span>
                                    <div className={trade.tradeHover ? "maxOpacity" : "Section1-row1-trade-text-subheading-app"}>
                                        <button>SIGN IN</button>
                                        <span onClick={()=>tradeFullScreen()}>See More</span>
                                    </div>
                                </p>
                            </div>

                            <div ref={tradeFullScreenText} className={trade.tradeOpen ? "Section1-row1-tradeOpen-ParentTextBlock" : "displayNone"} >
                                    <div className="Section1-row1-tradeOpen-textBlock">
                                        <div className="Section1-row1-tradeOpen-textBlock-Gollaa">
                                            <img  className="Section1-row1-tradeOpen-textBlock-Gollaa-image" src={Gollaa_text} alt="Golla_text"/>
                                            <span className="Section1-row1-tradeOpen-textBlock-Gollaa-heading" >trade</span>
                                        </div>
                                        <p className="Section1-row1-tradeOpen-textBlock-subheading1" >Paving the way for a collaborative economy.</p>
{/* 
                                        <p className="Section1-row1-tradeOpen-textBlock-subheading2" >In our pursuit to establish a circular economy, 
                                        help farmers and artisans deliver their quality products directly to the end consumers.</p> */}

                                        <p className="Section1-row1-tradeOpen-textBlock-subheading3" >The circular local economy that Gollaa wishes to establish is a step towards creating more resilient communities that are not susceptible to the fluctuations in the large global economy. This prevents them from crises that may impact others. Through microtransactions and blockchain technology, we wish to establish decentralized economy where producers benefit directly from the product they sell. This prevents the money from leaving the local regions, which helps strengthen communities and makes way for a socially fair economy. Gollaa advocates the equitable distribution of money and resources by reinforcing a
                                 local economy where the user and sellers interact with each other directly.</p>
                                 <div className= "Section1-row1-tradeOpen-textBlock-app">
                                    <button>Download App</button>
                                 </div>
                                    </div>
                                </div>

                            <div className={trade.tradeOpen ? "Section1-row1-tradeOpen-image" : "Section1-row1-trade-image"}>
                                <img src={Gollaa_Trade}  alt="Gollaa_trade" />
                            </div>
                        
                            <div className={overlayTrade.join('')}></div>
                        
                    </div>
                    

                </div>


            </div>


            {/* shop */}

            <Modal show={shop.shopModal} onHide={closeModalShop}  className="Golla_Modal">
               <div className="GollaModal"> 
                        <div className="GollaModal-cross" onClick={closeModalShop} >
                            <img src={Cross} alt="cross"/>
                        </div>
                        <div className="GollaModal-image">
                            <img src={Gollaa_Shop} alt="shop with golla"/>
                        </div>

                        <div className="GollaModal-textBlock">
                            <div className="GollaModal-textBlock-logo">
                                <div className="GollaModal-textBlock-logo-image"><img src={Gollaa_text} alt="Golla Text"/></div>
                                <span className="GollaModal-textBlock-heading">SHOP</span>
                            </div>
                            <div className="GollaModal-textBlock-text">

                                <p className="GollaModal-textBlock-text-heading">Your partner on the journey of sourcing fresh 
                                    and authentic products directly from 
                                local businesses.</p>
                                <p className="GollaModal-textBlock-text-para1">In our pursuit to establish a circular economy, help farmers and artisans deliver their
                                     quality products directly to the end consumers. </p>
                                <p className="GollaModal-textBlock-text-para2">Gollaa is a powerful platform 
                                     dedicated to helping our real heroes- the farmers generate profits from their product without
                                      having to deal with any middlemen. We are transforming how people shop by making the entire process, 
                                      right from production to delivery, completely transparent. This reassurance makes for a remarkable
                                       shopping experience for the users, as well as a secure way of selling for the farmers. Not only this, 
                                    Gollaa’s model is a step towards sustainability and ecological consciousness.
                                </p>

                            </div>

                            <button className="GollaModal-textBlock-button">Download App</button>
                        </div>
               </div>
            </Modal>


            <Modal show={grow.growModal} onHide={closeModalGrow}  className="Golla_Modal">
               <div className="GollaModal" style={{background:"#8ABB2A"}}> 
                        <div className="GollaModal-cross" onClick={closeModalGrow} >
                            <img src={Cross} alt="cross"/>
                        </div>
                        <div className="GollaModal-image">
                            <img src={Gollaa_Grow} alt="grow  with golla farmers"/>
                        </div>

                        <div className="GollaModal-textBlock">
                            <div className="GollaModal-textBlock-logo">
                                <div className="GollaModal-textBlock-logo-image"><img src={Gollaa_text} alt="Golla Text"/></div>
                                <span className="GollaModal-textBlock-heading">GROW</span>
                            </div>
                            <div className="GollaModal-textBlock-text">

                                <p className="GollaModal-textBlock-text-heading">Accelerate your journey to success</p>
                                <p className="GollaModal-textBlock-text-para1">(Say goodbye to intermediaries and reach consumers directly through Gollaa) 
                                Gollaa concept relies on peer-to-peer support extended between communities of farmers and local business owners. You can join us if you wish to step up your presence 
                                in the community and be amongst strong peer who support and help each other grow.</p>

                                <p className="GollaModal-textBlock-text-para2"> We help local farmers and artisans, diversify their activities to become the environment and human activities to create a sustainable future. This is done by striking an equilibrium between civilization and natural resources, something that conventional farming failed to do.
                                 If you to wish to do your part in bring about this change, sign up today!
                                </p>

                            </div>

                            <button className="GollaModal-textBlock-button">Download App</button>
                        </div>
               </div>
            </Modal>



            <Modal show={support.supportModal} onHide={closeModalSupport}  className="Golla_Modal">
               <div className="GollaModal" style={{background:"#FFE815"}}> 
                        <div className="GollaModal-cross" onClick={closeModalSupport} >
                            <img src={Cross} alt="cross"/>
                        </div>
                        <div className="GollaModal-image">
                            <img src={Gollaa_Support} alt="support wiht golla"/>
                        </div>

                        <div className="GollaModal-textBlock">
                            <div className="GollaModal-textBlock-logo">
                                <div className="GollaModal-textBlock-logo-image"><img src={Gollaa_text} alt="Golla Text"/></div>
                                <span className="GollaModal-textBlock-heading">SUPPORT</span>
                            </div>
                            <div className="GollaModal-textBlock-text">

                                <p className="GollaModal-textBlock-text-heading">Extended Support to local communities</p>
                                <p className="GollaModal-textBlock-text-para1">Build resilient and conscientious communities Golllaa Support is extended to all
                                 the farmers and local businesses looking for a way to expand their horizons. By helping farmers and artisans sell directly to end consumers, we help them create 
                                better avenues for their business. Gollaa offers consulting to farmer and local businesses struggling to keep up with the market. </p>
                                <p className="GollaModal-textBlock-text-para2"> Our team is driven to bring a socio- economic paradigm shift in the 
                                world that we live in. Through holistic training and extensive support schemes for farmers and local business owners, our 
                                mission is to impact their lives in a way that matters.
                                </p>

                            </div>

                            <button className="GollaModal-textBlock-button">Download App</button>
                        </div>
               </div>
            </Modal>



            <Modal show={stay.stayModal} onHide={closeModalStay}  className="Golla_Modal">
               <div className="GollaModal" style={{background:"#5FAF42"}}> 
                        <div className="GollaModal-cross" onClick={closeModalStay} >
                            <img src={Cross} alt="cross"/>
                        </div>
                        <div className="GollaModal-image">
                            <img src={Gollaa_Stay} alt="stay gollaa"/>
                        </div>

                        <div className="GollaModal-textBlock">
                            <div className="GollaModal-textBlock-logo">
                                <div className="GollaModal-textBlock-logo-image"><img src={Gollaa_text} alt="Golla Text"/></div>
                                <span className="GollaModal-textBlock-heading">STAY</span>
                            </div>
                            <div className="GollaModal-textBlock-text">

                                <p className="GollaModal-textBlock-text-heading">Replenish and recharge in nature's lap</p>
                                <p className="GollaModal-textBlock-text-para1">(Experience nature's bounty by immersing yourself in a peaceful stay at a farm) 
                                Looking for a way to get away from the never ending phone calls and emails? you have found just a right thing. Away from the 
                                hustle-bustle of city life exists the melodious chirping of birds and the rustling of leaves in the wind offering a 
                                contemplative experience. You can connect with nature and be at peace with your own self by staying at these beautiful farms.
                                 A comfortable far stay offers a rejuvenating experience to city dwellers looking to explore nature's diversity or just looking
                                  for a way to recharge themselves. </p>
                                <p className="GollaModal-textBlock-text-para2">Farmers who wish to share their resourceful and relaxing farm spaces with the urban 
                                  population can utilize this as an opportunity to diversify their activities.
                                </p>

                            </div>

                            <button className="GollaModal-textBlock-button">Download App</button>
                        </div>
               </div>
            </Modal>


            <Modal show={trade.tradeModal} onHide={closeModalTrade}  className="Golla_Modal">
               <div className="GollaModal" style={{background:"#ADCB4F"}}> 
                        <div className="GollaModal-cross" onClick={closeModalTrade} >
                            <img src={Cross} alt="cross"/>
                        </div>
                        <div className="GollaModal-image">
                            <img src={Gollaa_Trade} alt="trade with golla"/>
                        </div>

                        <div className="GollaModal-textBlock">
                            <div className="GollaModal-textBlock-logo">
                                <div className="GollaModal-textBlock-logo-image"><img src={Gollaa_text} alt="Golla Text"/></div>
                                <span className="GollaModal-textBlock-heading">TRADE</span>
                            </div>
                            <div className="GollaModal-textBlock-text">

                                <p className="GollaModal-textBlock-text-heading">Paving the way for a collaborative economy</p>

                                <p className="GollaModal-textBlock-text-para1">The circular local economy that Gollaa wishes to establish is a step towards creating more resilient communities that are not susceptible to the fluctuations in the large global economy. This prevents them from crises that may impact others. Through microtransactions and blockchain technology, we wish to establish decentralized economy where producers benefit directly from the product they sell. This prevents the money from leaving the local regions, which helps strengthen communities and makes way for a socially fair economy. Gollaa advocates the equitable distribution of money and resources by reinforcing a
                                 local economy where the user and sellers interact with each other directly.</p>
                                {/* <p className="GollaModal-textBlock-text-para2">Farmers who wish to share their resourceful and relaxing farm spaces with the urban 
                                  population can utilize this as an opportunity to diversify their activities.
                                </p> */}

                            </div>

                            <button className="GollaModal-textBlock-button">Download App</button>
                        </div>
               </div>
            </Modal>


        </React.Fragment>
    )

}