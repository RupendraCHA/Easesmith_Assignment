import { createContext, useState} from "react";
import {productsListArray} from "../assets/assets.js"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [productDetails, setProductDetails] = useState({product_name: "FIRST CLICK ON VIEW PRODUCT."})
    const [currState, setCurrState] = useState("Sign Up")
    const [showModel, setShowModel] = useState(false)

    const [searchItem, setSearchItem] = useState('')

  const filteredProducts = productsListArray.filter((product) =>
    product.productName.toLowerCase().includes(searchItem.toLowerCase())
  );

    const contextValue = {
        productDetails,
        setProductDetails,
        currState,
        setCurrState,
        showModel,
        setShowModel,
        searchItem,
        filteredProducts,
        setSearchItem
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider