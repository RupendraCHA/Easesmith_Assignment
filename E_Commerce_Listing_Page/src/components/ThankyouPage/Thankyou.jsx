
import { useContext } from "react"
import "./Thankyou.css"
import { StoreContext } from "../../context/StoreContext"
import { Link } from "react-router-dom"

const Thankyou = () => {

    const {productDetails} = useContext(StoreContext)

  return (
    <div className='thankyou'>
        
        <div className="thankyou-card">
            <p className="thank-message">Hi there, Thank you for viewing our product <span>{productDetails.productName}.</span></p>
            <img src='./Thankyou.jpg' alt=''/>
            <div className="products-button">
                <Link to="/"><button className="button">Click here to Go and View more Products</button></Link>
            </div>
            <p>*Subscribe to our website and get notifications to stay updated.</p>
            <div className="user-email-address">
                <input type="email" placeholder="Enter your Email address"/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Thankyou