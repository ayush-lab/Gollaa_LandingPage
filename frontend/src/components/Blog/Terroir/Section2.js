import React,{useState} from 'react';
// import {Link} from 'react-router-dom';
import Fruit1 from '../../../assets/images/fruit1.png';
import Fruit2 from '../../../assets/images/fruit2.png';
import Fruit3 from '../../../assets/images/fruit3.png';
import Fruit4 from '../../../assets/images/fruit4.png';
import Fruit5 from '../../../assets/images/fruit5.png';
import Fruit6 from '../../../assets/images/fruit6.png';
import Fruit7 from '../../../assets/images/fruit7.png';
import Fruit8 from '../../../assets/images/fruit8.png';
import Fruit9 from '../../../assets/images/fruit9.png';




export default function TerroirSection2(){


  // state to save the hover state of fruits
  const [fruit1,fruit1Handler] = useState(false);
  const [fruit2,fruit2Handler] = useState(false);
  const [fruit3,fruit3Handler] = useState(false);
  const [fruit4,fruit4Handler] = useState(false);
  const [fruit5,fruit5Handler] = useState(false);
  const [fruit6,fruit6Handler] = useState(false);
  const [fruit7,fruit7Handler] = useState(false);
  const [fruit8,fruit8Handler] = useState(false);
  const [fruit9,fruit9Handler] = useState(false);


    return(
        <>
          <div className="TerroirSection2"> 

             <div className="TerroirSection2-left">
                 <p>Fruits of <span>Uttarakhand</span></p>
             </div>

             <div className="TerroirSection2-right"> 

                    <div className="TerroirSection2-right-top">
                        <p>The richness of Uttarakhand terroir allows it to produce some exquisite fruits with an amazing taste and high nutritional value. Some of the piquant 
                            fruits you’ll be able to enjoy once you are in Uttarakhand are listed below-</p>
                    </div>

                    <div className="TerroirSection2-right-mobile">
                        <div className="TerroirSection2-right-mobile-content">
                            <img src={Fruit1} alt="fruits"/>
                            <span className="TerroirSection2-right-mobile-content-name1">Strawberry</span>
                        </div>
                        <div className="TerroirSection2-right-mobile-content">
                            <img src={Fruit2} alt="fruits"/>
                            <span className="TerroirSection2-right-mobile-content-name2">Kafal</span>
                        </div>
                          <div className="TerroirSection2-right-mobile-content">
                            <img src={Fruit3} alt="fruits"/>
                            <span className="TerroirSection2-right-mobile-content-name3">Hisalu</span>
                        </div>
                        <div className="TerroirSection2-right-mobile-content">
                            <img src={Fruit4} alt="fruits"/>
                            <span className="TerroirSection2-right-mobile-content-name4">Ghingaru</span>
                        </div>
                        <div className="TerroirSection2-right-mobile-content">
                            <img src={Fruit5} alt="fruits"/>
                            <span className="TerroirSection2-right-mobile-content-name5">Apricot</span>
                        </div>
                        <div className="TerroirSection2-right-mobile-content">
                            <img src={Fruit6} alt="fruits"/>
                            <span className="TerroirSection2-right-mobile-content-name6">Dadim</span>
                        </div>
                        <div className="TerroirSection2-right-mobile-content">
                            <img src={Fruit7} alt="fruits"/>
                            <span className="TerroirSection2-right-mobile-content-name7">Mulbarries</span>
                        </div>
                        <div className="TerroirSection2-right-mobile-content">
                            <img src={Fruit8} alt="fruits"/>
                            <span className="TerroirSection2-right-mobile-content-name8">Plum</span>
                        </div>
                        <div className="TerroirSection2-right-mobile-content">
                            <img src={Fruit9} alt="fruits"/>
                            <span className="TerroirSection2-right-mobile-content-name9">Kilmode</span>
                        </div>
                    </div>


                    <div className="TerroirSection2-right-middle">
                        <div className="TerroirSection2-right-middle-col1">

                            <div onMouseEnter={()=>fruit1Handler(true)} 
                                onMouseLeave={()=>fruit1Handler(false)}
                                className="relative">
                                <p className={fruit1 ? "fruit-text-none" : "TerroirSection2-right-middle-col1-name1"}>
                                    Strawberry
                                </p>
                                <img className={fruit1 ? "TerroirSection2-right-middle-col1-fruit1" : "fruit-picture-none"} src={Fruit1} alt="fruits"/>

                            </div>
                            

                            <div onMouseEnter={()=>fruit2Handler(true)} 
                                 onMouseLeave={()=>fruit2Handler(false)} 
                                 className="relative">
                                <p className={fruit2 ? "fruit-text-none" : "TerroirSection2-right-middle-col1-name2"}>
                                    Kafal
                                </p>
                                <img className={fruit2 ? "TerroirSection2-right-middle-col1-fruit2" : "fruit-picture-none"} src={Fruit4} alt="fruit"/>

                            </div>
                          
                            <div onMouseEnter={()=>fruit3Handler(true)} 
                                 onMouseLeave={()=>fruit3Handler(false)} className="relative" >
                                <p className={fruit3 ? "fruit-text-none" :"TerroirSection2-right-middle-col1-name3"}>
                                    Hisalu
                                </p>
                                <img className={fruit3 ? "TerroirSection2-right-middle-col1-fruit3" : "fruit-picture-none"} src={Fruit7} alt="fruit"/>

                            </div>
                     
                        </div>

                        <div className="TerroirSection2-right-middle-col2">
                            <div onMouseEnter={()=>fruit4Handler(true)} 
                                onMouseLeave={()=>fruit4Handler(false)} className="relative">
                                <p  className={fruit4 ? "fruit-text-none" :"TerroirSection2-right-middle-col2-name1"}>Ghingaru</p>
                            <img className={fruit4 ? "TerroirSection2-right-middle-col2-fruit1" : "fruit-picture-none"} src={Fruit2} alt="fruits"/>

                            </div>
                            
                            
                            <div onMouseEnter={()=>fruit5Handler(true)} 
                               onMouseLeave={()=>fruit5Handler(false)} className="relative">
                                <p className={fruit5 ? "fruit-text-none" :"TerroirSection2-right-middle-col2-name2"}>Apricot</p>
                                <img className={fruit5 ? "TerroirSection2-right-middle-col2-fruit2" : "fruit-picture-none"} src={Fruit5} alt="fruit"/>

                            </div>
                         

                            <div  
                              onMouseEnter={()=>fruit6Handler(true)} 
                               onMouseLeave={()=>fruit6Handler(false)} className="relative">
                                <p  className={fruit6 ? "fruit-text-none" :"TerroirSection2-right-middle-col2-name3"}>Dadim</p>
                                <img className={fruit6 ? "TerroirSection2-right-middle-col2-fruit3" : "fruit-picture-none"} src={Fruit8} alt="fruit"/>

                            </div>
                        </div>

                        
                        <div className="TerroirSection2-right-middle-col3">
                            <div onMouseEnter={()=>fruit7Handler(true)} 
                                onMouseLeave={()=>fruit7Handler(false)} className="relative">
                                 <p className={fruit7 ? "fruit-text-none" :"TerroirSection2-right-middle-col3-name1"}>Mulbarries</p>
                                 <img className={fruit7 ? "TerroirSection2-right-middle-col3-fruit1" : "fruit-picture-none"} src={Fruit3} alt="fruits"/>

                            </div>
                               
                            
                            <div onMouseEnter={ ()=>fruit8Handler(true)}
                                onMouseLeave={()=>fruit8Handler(false)} className="relative" >
                                <p  className={fruit8 ? "fruit-text-none" :"TerroirSection2-right-middle-col3-name2"}> Plum</p>
                                <img className={fruit8 ? "TerroirSection2-right-middle-col3-fruit2" : "fruit-picture-none"} src={Fruit6} alt="fruit"/>

                            </div>


                            <div onMouseEnter={()=>fruit9Handler(true)}
                                onMouseLeave={()=>fruit9Handler(false)}  className="relative">
                                <p className={fruit9 ? "fruit-text-none" :"TerroirSection2-right-middle-col3-name3"}> Kilmode</p>
                                <img className={fruit9 ? "TerroirSection2-right-middle-col3-fruit3" : "fruit-picture-none"} src={Fruit9} alt="fruit"/>

                            </div>
                            
                        </div>
                    </div>

                    <div className="TerroirSection2-right-bottom">
                        <p>It is possible to grow such an extensive variety of edible fruiting plants 
                            in Uttarakhand despite their requirement of specific climatic conditions and geography.</p>
                    </div>

             </div>


          </div>

        </>
    );
}

