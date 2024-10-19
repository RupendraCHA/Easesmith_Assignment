import {useState } from 'react'
import "./Navbar.css"
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {

    const [menu, setMenu] = useState("home")
    return (<>
            <div className='contact-information-and-offer'>
                {/* <p></p> */}
                <p>Free Shipping on orders above 999/-</p>
                <p>Call us on: +91 98768 05120</p>
            </div>
            <div className='navbar'>
                <div className='website-logo'>
                    <img src='/logo.png' className='website-logo' alt="WebsiteLogo"/>
                    <p className='website-name'>Chaperone</p>
                </div>
                <ul className='navbar-menu'>
                    <a href='#home' onClick={() => setMenu("home")} className={menu === "home" ? 'active' : ''}>Home</a>
                    <a href='#plants-pots' onClick={() => setMenu("plants")} className={menu === "plants" ? 'active' : ''}>Plants & Pots</a>
                    <a href='#tools' onClick={() => setMenu("tools")} className={menu === "tools" ? 'active' : ''}>Tools</a>
                    <a href='#ourservices' onClick={() => setMenu("services")} className={menu === "services" ? 'active' : ''}>Our Services</a>
                    <a href='#blog' onClick={() => setMenu("blog")} className={menu === "blog" ? 'active' : ''}>Blog</a>
                    <a href='#ourstory' onClick={() => setMenu("story")} className={menu === "story" ? 'active' : ''}>Our Story</a>
                    <a href='#faqs' onClick={() => setMenu("faqs")} className={menu === "faqs" ? 'active' : ''}>FAQs</a>
                    <a href='https://myportfolio1r.ccbp.tech/' target='_blank' onClick={() => setMenu("author")} className={menu === "author" ? 'active' : ''}>Rupendra(Author)</a>
                </ul>
                <div className='navbar-right'>
                <div className='navbar-right-logos'>
                    <FaRegUserCircle className='nav-image'/>
                    <p>My Profile</p>
                </div>
                <div className='navbar-cart-icon'>
                    <div className='navbar-right-logos'>
                        <IoCartOutline className='nav-image'/>
                        <p>Cart</p>
                    </div>
                    <div className="dot">3</div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
