
import { useContext } from "react"
import "./Model.css"
import { StoreContext } from "../../context/StoreContext"
import {Link} from 'react-router-dom'



const ModelPopup = () => {

    const {setShowModel, productDetails} = useContext(StoreContext)

    const {
        productName, 
      description, 
      image, 
      reviewIcon, 
      wishlistIcon, 
      originalPrice, 
      discountedPrice,
      rating
      } = productDetails

    return (
        <div className='model-popup' onClick={() => setShowModel(false)}>
            <div className='model-popup-container'>
                <div className='model-popup-title'>
                    <h2>Product Details</h2>
                    <button onClick={() => setShowModel(false)} >X</button>
                </div>
                <div className="product-details-section">
                    
                    <img className="plant-picture" src={image} alt={productName}/>
                    <div className="name-description">
                        <h3>{productName}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="product-review">
                        <img className="product-review-icon" src={reviewIcon} alt="productReview"/>
                        <p>{rating}</p>
                    </div>
                    <div className='prices'>
                        <p className='original-price'>₹ {originalPrice}</p>
                        <p className='discounted-price'>₹ {discountedPrice}</p>
                    </div>
                    <div className="cart-buttons">
                        <button onClick={() => setShowModel(false)} className="common cancel">Cancel</button>
                        <button className="common confirm">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModelPopup
