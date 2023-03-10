import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="footer-area bg-img" style={{backgroundImage: "url(assets/img/bg-img/3.jpg)" }} >
                {/* <!-- Main Footer Area --> */}
                <div className="main-footer-area">
                    <div className="container">
                        <div className="row">

                            {/* <!-- Single Footer Widget --> */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget">
                                    <div className="footer-logo mb-30">
                                        <a href="#"><img src="assets/img/core-img/logo.png" alt="" /></a>
                                    </div>
                                    <p>Lorem ipsum dolor sit samet, consectetur adipiscing elit. India situs atione mantor</p>
                                    <div className="social-info">
                                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Footer Widget --> */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget">
                                    <div className="widget-title">
                                        <h5>QUICK LINK</h5>
                                    </div>
                                    <nav className="widget-nav">
                                        <ul>
                                            <li><a href="#">Purchase</a></li>
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">Payment</a></li>
                                            <li><a href="#">News</a></li>
                                            <li><a href="#">Return</a></li>
                                            <li><a href="#">Advertise</a></li>
                                            <li><a href="#">Shipping</a></li>
                                            <li><a href="#">Career</a></li>
                                            <li><a href="#">Orders</a></li>
                                            <li><a href="#">Policities</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            {/* <!-- Single Footer Widget --> */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget">
                                    <div className="widget-title">
                                        <h5>BEST SELLER</h5>
                                    </div>

                                    {/* <!-- Single Best Seller Products --> */}
                                    <div className="single-best-seller-product d-flex align-items-center">
                                        <div className="product-thumbnail">
                                            <a href="shop-details.html"><img src="assets/img/bg-img/4.jpg" alt="" /></a>
                                        </div>
                                        <div className="product-info">
                                            <a href="shop-details.html">Cactus Flower</a>
                                            <p>$10.99</p>
                                        </div>
                                    </div>

                                    {/* <!-- Single Best Seller Products --> */}
                                    <div className="single-best-seller-product d-flex align-items-center">
                                        <div className="product-thumbnail">
                                            <a href="shop-details.html"><img src="assets/img/bg-img/5.jpg" alt="" /></a>
                                        </div>
                                        <div className="product-info">
                                            <a href="shop-details.html">Tulip Flower</a>
                                            <p>$11.99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Single Footer Widget --> */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget">
                                    <div className="widget-title">
                                        <h5>CONTACT</h5>
                                    </div>

                                    <div className="contact-information">
                                        <p><span>Address:</span> 505 Silk Rd, New York</p>
                                        <p><span>Phone:</span> +1 234 122 122</p>
                                        <p><span>Email:</span> info.deercreative@gmail.com</p>
                                        <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
                                        <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Footer Bottom Area --> */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="border-line"></div>
                            </div>
                            {/* <!-- Copywrite Text --> */}
                            <div className="col-12 col-md-6">
                                <div className="copywrite-text">
                                    <p> <a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
                                </div>
                            </div>
                            {/* <!-- Footer Nav --> */}
                            <div className="col-12 col-md-6">
                                <div className="footer-nav">
                                    <nav>
                                        <ul>
                                            <li> <Link to={'/'}>Home</Link> </li>
                                            <li> <Link to={'/about'}>About</Link> </li>
                                            <li><a href="#">Service</a></li>
                                            <li> <Link to={'/portfolio'}>Portfolio</Link> </li>
                                            <li> <Link to={'/blog'}>Blog</Link> </li>
                                            <li> <Link to={'/contact'}>Contact</Link> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- ##### Footer Area End ##### --> */}
        </>
    )
}
