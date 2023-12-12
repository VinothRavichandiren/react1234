import React from "react";
import './offer.css'
import excul from'../assets/exclusive_image.png'

const Offer =()=>{
    return(
        <div className="offer">
            <div className="offer-left">
               <h3>Exculsive</h3>
                 
 <h3>   Offers For You</h3> 
<p>ONLY ON BEST SELLERS PRODUCT</p>  
<button>Check</button> 
        </div>
            <div className="offer-right">
                <img src={excul} alt=""/>
            </div>
        </div>
    )
}
export default Offer
