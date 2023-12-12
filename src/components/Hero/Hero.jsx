import React from "react";
import'./Hero.css'
import hero from  '../assets/hero.webp' 



const Hero =()=>{
    return(
        <div className="hero">
           <div className="hero-left" >
             <h2>NEW ARRIVALS ONLY</h2>
             <div>
                <div className="para">
                    <p>new</p>
                <p>collections</p>
                <p>for everyone</p>
                </div>
             </div>
             <div className="btn">
             <div className="hero-latest-btn">
                <div>Latest Collections</div>
                
             </div>
             </div>
           </div>
           <div className="hero-right" >
            <img src={hero} alt=""/>

           </div>
        </div>
    )
}
export default Hero