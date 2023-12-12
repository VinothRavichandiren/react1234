import React, {createContext} from 'react'
import all_product from '../components/assets/all_product'

 export const Shopcontext = createContext("")

 const ShopContextPrivider =(props ) =>{
    const contextValue ={all_product};
    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
 }

 export default ShopContextPrivider