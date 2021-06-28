import React from 'react';
import {Link} from 'react-router-dom';
import Terroirs from '../../../assets/images/terriour.png';
import cityEscape from '../../../assets/images/cityEscape.png';
import OldFashion from '../../../assets/images/nature.png';
import Currency from '../../../assets/images/Currency.png';

export default function BlogMain(){


//   const [Section2,Section2Handler] = useState({Hover:false});


    return(
          <div className="Blog"> 
            
            <div className="Blog-row1">
                <img src={Terroirs} alt="rich terroirs"/>
                <div className="Blog-row1-text">
                    <p>Indian Terroirs</p>
                    <Link className="link" to="/blog/terroir"><button>See More</button></Link>
                </div>
            </div>

            <div className="Blog-row2">
                <div className="Blog-row2-cityEscape">
                    <img src={cityEscape} alt="city escape"/>
                    <div className="Blog-row2-cityEscape-text">
                        <p>City Escape</p>
                        <Link className="link" to="/blog/city"><button>See More</button></Link>
                    </div>
                </div>
                
                <div className="Blog-row2-oldFashion">
                    <img src={OldFashion} alt="nature"/>
                    <div className="Blog-row2-oldFashion-text">
                        <p>old fashion way of growing</p>
                        <button>See More</button>
                    </div>
                </div>

            </div>

            <div className="Blog-row3">
                <img src={Currency} alt="currency"/>
                <div className="Blog-row3-text">
                    <p>complementary local currency</p>
                    <Link className="link" to="/blog/currency"><button>See More</button></Link>
                </div>
            </div>


          </div>

    
    );
}

