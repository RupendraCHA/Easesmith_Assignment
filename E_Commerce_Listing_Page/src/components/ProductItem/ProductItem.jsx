import React from 'react'
import "./ProductItem.css"

const ProductItem = (props) => {

    const {product} = props
    const {
      product_name, 
      description, 
      image, 
      review_icon, 
      wishlist_icon, 
      original_price, 
      discounted_price,
      rating
    } = product

  return (
    <div className='product-item'>
      <div className='image-container'>
        <img className="wishlist-icon" src={wishlist_icon} alt='wishlistIcon'/>
        <img className='plant-image' src={image} alt={product_name}/>
        <button>View Product</button>
      </div>
      <div className='product-details'>
        <h3>{product_name}</h3>
        <p className='description'>{description}</p>
        <div className='review-rating'>
          <img src={review_icon} alt='review_icon'/>
          <p>{rating}</p>
        </div>
        <div className='prices'>
          <p className='original-price'>₹ {original_price}</p>
          <p className='discounted-price'>₹ {discounted_price}</p>
        </div>
        <div className='buttons'>
          <button className='common add-to-cart-button'>
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