import { createContext, useState} from "react";
import {productsListArray} from "../assets/assets.js"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [productDetails, setProductDetails] = useState({product_name: "FIRST CLICK ON VIEW PRODUCT."})
    const [showModel, setShowModel] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [searchItem, setSearchItem] = useState('')

  const filteredProducts = productsListArray.filter((product) =>
    product.productName.toLowerCase().includes(searchItem.toLowerCase())
  );

    const contextValue = {
        productDetails,
        setProductDetails,
        showModel,
        setShowModel,
        searchItem,
        filteredProducts,
        setSearchItem,
        currentPage,
        setCurrentPage
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider