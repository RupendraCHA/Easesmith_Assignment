import { createContext, useState} from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [productDetails, setProductDetails] = useState({product_name: "FIRST CLICK ON VIEW PRODUCT."})
    const [currState, setCurrState] = useState("Sign Up")
    const [showModel, setShowModel] = useState(false)

    // console.log(productDetails)

    const contextValue = {
        productDetails,
        setProductDetails,
        currState,
        setCurrState,
        showModel,
        setShowModel
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider