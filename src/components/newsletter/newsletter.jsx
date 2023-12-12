import React from "react";
import './newsletter.css'

const Newsletter =()=>{
    return(
        <div className="newsletter">
            <h1>Get Exculsive Offer On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated </p>
            <div>
                <input type = "email" placeholder="Your Email Id"/>
                <button>Subcribe</button>
            </div>
        </div>
    )
}
export default Newsletter