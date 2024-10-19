
import { useContext } from "react"
import "./Model.css"
import { StoreContext } from "../../context/StoreContext"
import {Link} from 'react-router-dom'



const ModelPopup = () => {

    const {setShowModel, productDetails} = useContext(StoreContext)

    const {
        product_name, 
        description, 
        image, 
        review_icon, 
        wishlist_icon, 
        original_price, 
        discounted_price,
        rating
      } = productDetails

    return (
        <div className='model-popup'>
            <div className='model-popup-container'>
                <div className='model-popup-title'>
                    <h2>Product Details</h2>
                    <button onClick={() => setShowModel(false)} >X</button>
                </div>
                <div className="product-details-section">
                    
                    <img className="plant-picture" src={image} alt={product_name}/>
                    <div>
                        <h3>{product_name}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="product-review">
                        <img className="product-review-icon" src={review_icon} alt="productReview"/>
                        <p>{rating}</p>
                    </div>
                    <div className='prices'>
                        <p className='original-price'>₹ {original_price}</p>
                        <p className='discounted-price'>₹ {discounted_price}</p>
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
