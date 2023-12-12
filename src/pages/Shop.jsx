import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/popular";
import Offer from "../components/offer/offer";
import Newcollection from "../components/Newcollection/Newcollections";
import Newsletter from "../components/newsletter/newsletter";
const Shop =()=>{
    return(
        <div>
         <Hero/>
         <Popular/>
         <Offer/>
         <Newcollection/>
         <Newsletter/>
         
        </div>
    )
}

export default Shop