import React from 'react'
import "./Footer.css"


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-content-left'>
                    {/* <img src={assets.logo} alt='' /> */}
                    <h2 className='section-heading'>Subscribe to Our NEWSETTLER</h2>
                    <p>A nursery is a place where rooting of planting materials or germination of seeds can be obtained in a better way, 
            under favourable growing conditions. In a nursery, seeds germinate effectively and seedlings give better stand in field.
            The nursery improves germination and colonization, saves time, space, labor and facilitates maintenance.
                    </p>
                    <input type='email' placeholder='Enter your email address'/>
                    <button className='subscribe-button'>Subscribe</button>
                </div>
                <div className='footer-content-center'>
                    <h2 className='section-heading'>ABOUT US</h2>
                    <ul>
                        <li>Our Story</li>
                        <li>Blogs</li>
                        <li>Careers</li>
                        <li>Contact Us</li>
                        <li>Help & Support</li>
                    </ul>
                </div>
                <div className='footer-content-center'>
                    <h2 className='section-heading'>OUR SERVICES</h2>
                    <ul>
                        <li>Book Malli</li>
                        <li>Plant Day Care</li>
                        <li>Rent Plants</li>
                        <li>Plants & Pots</li>
                        <li>Gardening Tools</li>
                    </ul>
                </div>
                <div className='footer-content-center'>
                    <h2 className='section-heading'>USEFUL LINKS</h2>
                    <ul>
                        <li>My Account</li>
                        <li>Orders & Returns</li>
                        <li>Track Order</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Return, Refund & Replacement Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2 className='section-heading'>GET IN TOUCH</h2>
                    <ul>
                        <li>Address: F-262, First Floor, Sushanth Lok Phase-III, 
                            Sector-57, Gurgaon, Haryana, India 122003
                        </li>
                        <li>
                            Call: +919958287272
                        </li>
                        <li>
                           Email: care@chaperoneplants.com
                        </li>
                    </ul>
                </div>
                
                
            </div>
            <div>
                    <h2 className='section-heading-1'>CHAPERONE</h2>
                    <p id='chaperone-text'>A nursery is a place where rooting of planting materials or germination of seeds can be obtained in a better way, 
                        under favourable growing conditions. In a nursery, seeds germinate effectively and seedlings give better stand in field.
                        The nursery improves germination and colonization, saves time, space, labor and facilitates maintenance.
                    </p>
                    <h2 className='section-heading-1'>Follow us on</h2>
                    <div className='footer-social-icons'>
                            <a target='_blank' href='https://www.instagram.com/chaperoneplants/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw%3D%3D'>
                                <img src="/instagram.png" alt='' />
                            </a>
                            <a target='_blank' href='https://www.facebook.com/?_rdr'>
                                <img src="/facebook.png" alt='' />
                            </a>
                            <a target='_blank' href='https://www.threads.net/login'>
                                <img src="/threads.png" alt='' />
                            </a>
                            <a target='_blank' href='https://www.youtube.com/'>
                                <img src="/youtube.png" alt='' />
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/company/chaperone-plants/'>
                                <img src="/Linkedin.png" alt='' />
                            </a>
                    </div>
                    <hr />
                    <p className='footer-copyright'>
                        Copyright @ 2024 © chaperone.com - All rights reserved.
                    </p>
                </div>
        </div>
    )
}

export default Footer
