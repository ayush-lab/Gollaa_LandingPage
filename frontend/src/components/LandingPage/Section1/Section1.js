import React,{useState,useRef} from 'react';
import Cross from '../../../assets/images/Cross.svg'
import Gollaa_Shop from '../../../assets/images/Shop_Illustration.svg';
import Gollaa_text from '../../../assets/images/Gollaa.svg';
import Gollaa_Grow from '../../../assets/images/GollaaGrow_illustration.svg';
import Gollaa_Support from '../../../assets/images/Support_Illustration.svg';
import Gollaa_Stay from '../../../assets/images/Stay Illustration.svg';
import Gollaa_Trade from '../../../assets/images/Gollaa Trade Illustration.svg';

export default function Section1(){

  const [shop,shopHandler] = useState({shopOpen:false,shopHover:false,shopClicked:false,shopClosedClick:false});
  const [grow,growHandler] = useState({growOpen:false,growHover:false,growClicked:false,growClosedClick:false});
  const [support,supportHandler] = useState({supportOpen:false,supportHover:false,supportClicked:false,supportClosedClick:false});
  const [stay,stayHandler] = useState({stayOpen:false,stayHover:false,stayClicked:false,stayClosedClick:false});
  const [trade,tradeHandler] = useState({tradeOpen:false,tradeHover:false,tradeClicked:false,tradeClosedClick:false});



  const shopFullScreen=()=>{
    shopHandler(prevState=>({...prevState,shopOpen:!prevState.shopOpen,shopClicked:!prevState.shopClicked}))
  }
  const growFullScreen=()=>{
    growHandler(prevState=>({...prevState,growOpen:!prevState.growOpen,growClicked:!prevState.growClicked}))
  }
  const supportFullScreen=()=>{
    supportHandler(prevState=>({...prevState,supportOpen:!prevState.supportOpen,supportClicked:!prevState.supportClicked}))
  }
  const stayFullScreen=()=>{
    stayHandler(prevState=>({...prevState,stayOpen:!prevState.stayOpen,stayClicked:!prevState.stayClicked}))
  }
  const tradeFullScreen=()=>{
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
    // document.querySelector("body").style.overflow = "hidden";
  }
  
  if(shop.shopClosedClick){
    overlayShop=["overlay-come"]
    // document.querySelector("body").style.overflow = "auto";
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
   // document.querySelector("body").style.overflow = "hidden";
   }     
   if(grow.growClosedClick){
   overlayGrow=["overlay-come"]
   // document.querySelector("body").style.overflow = "auto";
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
    // document.querySelector("body").style.overflow = "hidden";
    }     
    if(support.supportClosedClick){
    overlaySupport=["overlay-come"]
    // document.querySelector("body").style.overflow = "auto";
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
    // document.querySelector("body").style.overflow = "hidden";
    }     
    if(stay.stayClosedClick){
    overlayStay=["overlay-come"]
    // document.querySelector("body").style.overflow = "auto";
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
    // document.querySelector("body").style.overflow = "hidden";
    }     
    if(trade.tradeClosedClick){
    overlayTrade=["overlay-come"]
    // document.querySelector("body").style.overflow = "auto";
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
                                        <p className="Section1-row1-stayOpen-textBlock-subheading1" >Your partner on the journey of sourcing fresh 
                                        and authentic products directly from local businesses.</p>

                                        <p className="Section1-row1-stayOpen-textBlock-subheading2" >In our pursuit to establish a circular economy, 
                                        help farmers and artisans deliver their quality products directly to the end consumers.</p>

                                        <p className="Section1-row1-stayOpen-textBlock-subheading3" > Gollaa is a powerful platform dedicated to helping our real
                                        heroes- the farmers generate profits from their product without having to deal with any middlemen. 
                                        We are transforming how people shop by making the entire process, right from production to delivery, 
                                        completely transparent. This reassurance makes for a remarkable shopping experience for the users, as well as a secure 
                                        way of selling for the farmers. Not only this, 
                                        Gollaa’s model is a step towards sustainability and ecological consciousness.</p>
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
                                    <span className="Section1-row1-trade-text-Gollaa-heading" >Trade</span>
                                </div>
                                <p className="Section1-row1-trade-text-subheading">Be a part of a Collaborative <br/>economy
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
                                        <p className="Section1-row1-tradeOpen-textBlock-subheading1" >Your partner on the journey of sourcing fresh 
                                        and authentic products directly from local businesses.</p>

                                        <p className="Section1-row1-tradeOpen-textBlock-subheading2" >In our pursuit to establish a circular economy, 
                                        help farmers and artisans deliver their quality products directly to the end consumers.</p>

                                        <p className="Section1-row1-tradeOpen-textBlock-subheading3" > Gollaa is a powerful platform dedicated to helping our real
                                        heroes- the farmers generate profits from their product without having to deal with any middlemen. 
                                        We are transforming how people shop by making the entire process, right from production to delivery, 
                                        completely transparent. This reassurance makes for a remarkable shopping experience for the users, as well as a secure 
                                        way of selling for the farmers. Not only this, 
                                        Gollaa’s model is a step towards sustainability and ecological consciousness.</p>
                                    </div>
                                </div>

                            <div className={trade.tradeOpen ? "Section1-row1-tradeOpen-image" : "Section1-row1-trade-image"}>
                                <img src={Gollaa_Trade}  alt="Gollaa_trade" />
                            </div>
                        
                            <div className={overlayTrade.join('')}></div>
                        
                    </div>
                    

                </div>


            </div>
        </React.Fragment>
    )

}