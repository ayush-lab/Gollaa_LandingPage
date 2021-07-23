import React from 'react';
// import {Link} from 'react-router-dom';
import PiggyBank from '../../../assets/images/PiggyBank.png';
import ManonCoins from '../../../assets/images/ManonCoins.png';
import Carlos from '../../../assets/images/carlos.png';
import CoinRain from '../../../assets/images/coinRain.svg';


export default function CurrencySections(){


    let OpacityRef = React.useRef();
    let zoomOutRef = React.useRef();
    let LeftToRightRef = React.useRef();
    let CoinRef = React.useRef();


    return(
        <>
          <div className="CurrencySection1"> 
                <div className="CurrencySection1-text">
                    <p className="CurrencySection1-text-heading">The principle and benefits of a <span>complementary local currency</span></p>
                    <p className="CurrencySection1-text-para">Complementary local currency is a recent 
                    movement that has helped people take better control of their economy and open doors for resilience and prosperity within the community. It refers to a currency that can be spent in a particular district in exchange for products and services. The local currency can be used parallelly with the domestic currency. It helps people buy various products locally and, in turn, increase their earning potential. Aiding direct interaction between producers and consumers using a local circular economy 
                    can serve significant benefits to both the consumers as well as local business owners.</p>
                </div>
          </div>

          <div onMouseEnter={()=>{OpacityRef.current.classList.add('opacity_appear')}} className="CurrencySection2">
              <div className="CurrencySection2-image">
                  <img src={PiggyBank} alt="piggy bank"/>
                </div>
              <div  className="CurrencySection2-about">
                  <div className="CurrencySection2-about-text">
                      <p className="CurrencySection2-about-text-heading">Principle of local <span>currency</span></p>
                      <p className="CurrencySection2-about-text-para">In a local economy, money circulates within a region.
                       A local currency is accepted within an area as a means of payment. This money is circulated locally 
                       for an extended period of time. In this cycle, everyone earns something, and everyone buys something.
                        Every dollar that a business owner spends locally has a higher chance of returning back to the business
                         when it is being circulated locally. 
                      This is the principle on which the local economy functions.</p>
                  </div>
              </div>
              <div ref={OpacityRef} className="CurrencySection2-card">
                  <div className="CurrencySection2-card-text">
                      <p className="CurrencySection2-card-text-heading">Principle of local <span>currency</span></p>
                      <p className="CurrencySection2-card-text-para">In a local economy, money circulates within a region.
                       A local currency is accepted within an area as a means of payment. This money is circulated locally 
                       for an extended period of time. In this cycle, everyone earns something, and everyone buys something.
                        Every dollar that a business owner spends locally has a higher chance of returning back to the business
                         when it is being circulated locally. 
                      This is the principle on which the local economy functions.</p>
                  </div>
              </div>
          </div>


          <div  onMouseEnter={()=>{zoomOutRef.current.classList.add('zoom_in_currency')}} className="CurrencySection3">
              <div className="CurrencySection3-left">
                <img src={ManonCoins} alt="ManonCoins Gollaa"/>
                {/* <div className={"CurrencySection3-left-overlay"}></div> */}
              </div>

              <div className="CurrencySection3-right">
                <div className="CurrencySection3-right-text">
                        <p ref={zoomOutRef} className="CurrencySection3-right-text-heading">Why Is It Important?</p>
                        <p className="CurrencySection3-right-text-para1">Money flows faster out of the local economy than it can be earned back. This leads to an increase in 
                            unemployment and depopulation. Lack of economic stability produces several disadvantages 
                            for the local communities. </p>
                        <p className="CurrencySection3-right-text-para2">The domestic economy is also subject to inflation, volatility, and limited usage. The local money is complementary and indexed to the domestic economy but rules out the problems associated with the conventional currency. 
                            This makes it exceptionally advantageous in times of economic hardships.</p>
                    </div>
              </div>

              <div className="CurrencySection3-textBlock">
                <div className="CurrencySection3-textBlock-text">
                    <p ref={zoomOutRef} className="CurrencySection3-textBlock-text-heading">Why Is It Important?</p>
                    <p className="CurrencySection3-textBlock-text-para1">Money flows faster out of the local economy than it can be earned back. This leads to an increase in 
                        unemployment and depopulation. Lack of economic stability produces several disadvantages 
                        for the local communities. </p>
                    <p className="CurrencySection3-textBlock-text-para2">The domestic economy is also subject to inflation, volatility, and limited usage. The local money is complementary and indexed to the domestic economy but rules out the problems associated with the conventional currency. 
                        This makes it exceptionally advantageous in times of economic hardships.</p>
                </div>
              </div>
          </div>


          <div onMouseEnter={()=>{LeftToRightRef.current.classList.add('leftToRight')}} className="CurrencySection4">
              <div className="CurrencySection4-left"> 
                    <div className="CurrencySection4-left-text">
                        <p className="CurrencySection4-left-text-heading">Social and environmental <span>benefits</span></p>
                        <div ref={LeftToRightRef} className="CurrencySection4-left-text-para">
                            <p className="CurrencySection4-left-text-para-para1">The most significant objective of a local 
                            currency is to further a social cause. A local currency can set the course for a more equitable 
                            and just distribution of resources. This can strengthen the local communities and help them compete
                            against major retailers. It also presents an opportunity to educate farmers to make use of the 
                            technology to earn better profits off of their products. </p>
                            <p className="CurrencySection4-left-text-para-para2">The local economy also establishes an 
                            ecological balance. Smaller supply chains reduce the ecological footprint and provide environmental 
                            protection. This leads to an overall increase in 
                            sustainability along with the prosperous development of the region.</p>
                        </div>
                    </div>
              </div>

              <div className="CurrencySection4-right">
                <img src={Carlos} alt=""/>
              </div>
              
          </div>

          <div  onMouseEnter={()=>{CoinRef.current.classList.add('CoinRain')}} className="CurrencySection5">
              <div ref={CoinRef}  className="CurrencySection5-image">
                  <img src={CoinRain} alt="coin background"/>
                  <img src={CoinRain} alt="coin background"/>
                  <img src={CoinRain} alt="coin background"/>
                  <img src={CoinRain} alt="coin background"/>
              </div>

              <div className="CurrencySection5-about">
                  <div className="CurrencySection5-about-text">
                        <p className="CurrencySection5-about-text-heading">Advantages of local  <span>currency</span></p>
                        <p className="CurrencySection5-about-text-para1">The local currency can either be
                        digitalized or be used as banknotes. Digitized local currency helps consumers make secure
                        payments conveniently. Some local currencies also offer incentives on the usage of the local money, 
                        which encourages consumers to make purchases. The circulative local economy can create jobs by 
                        supporting small businesses.</p>
                        <p className="CurrencySection5-about-text-para2">The local currency can either be
                        digitalized or be used as banknotes. Digitized local currency helps consumers make secure
                        payments conveniently. Some local currencies also offer incentives on the usage of the local money, 
                        which encourages consumers to make purchases. The circulative local economy can create jobs by 
                        supporting small businesses.</p>
                    </div>
              </div>

              <div className="CurrencySection5-textBlock">
                  <div className="CurrencySection5-textBlock-text">
                        <p className="CurrencySection5-textBlock-text-heading">Advantages of local  <span>currency</span></p>
                        <p className="CurrencySection5-textBlock-text-para1">The local currency can either be
                        digitalized or be used as banknotes. Digitized local currency helps consumers make secure
                        payments conveniently. Some local currencies also offer incentives on the usage of the local money, 
                        which encourages consumers to make purchases. The circulative local economy can create jobs by 
                        supporting small businesses.</p>
                        <p className="CurrencySection5-textBlock-text-para2">The local currency can either be
                        digitalized or be used as banknotes. Digitized local currency helps consumers make secure
                        payments conveniently. Some local currencies also offer incentives on the usage of the local money, 
                        which encourages consumers to make purchases. The circulative local economy can create jobs by 
                        supporting small businesses.</p>
                    </div>
              </div>
              <div className={"CurrencySection5-overlay"}></div>
          </div>
        </>
    );
}

