import React, { useContext } from 'react'
import "./ProductItem.css"
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'


const ProductItem = (props) => {

    const {product} = props
    const {
      productName, 
      description, 
      image, 
      reviewIcon, 
      wishlistIcon, 
      originalPrice, 
      discountedPrice,
      rating
    } = product

    const {setShowModel, setProductDetails} = useContext(StoreContext)

    const handleClick = () => {
      setShowModel(true)
      setProductDetails(product)
    }

  return (
    <div className='product-item'>
    
      <div className='image-container'>
        <img className="wishlist-icon" src={wishlistIcon} alt='wishlistIcon'/>
        <img className='plant-image' src={image} alt={productName}/>
        <Link to="/thankyou" onClick={() => setProductDetails(product)}><button>View Product</button></Link>
      </div>
      <div className='product-details'>
        <h3>{productName}</h3>
        <p className='description'>{description}</p>
        <div className='review-rating'>
          <img src={reviewIcon} alt='review_icon'/>
          <p>{rating}</p>
        </div>
        <div className='prices'>
          <p className='original-price'>₹ {originalPrice}</p>
          <p className='discounted-price'>₹ {discountedPrice}</p>
        </div>
        <div className='buttons'>
          <button onClick={handleClick} className='common add-to-cart-button'>
            <p>-</p>
            <p>Add to cart</p>
            <p>+</p>
          </button>
          <button className='common buy-button'>
            Buy on Rent
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem