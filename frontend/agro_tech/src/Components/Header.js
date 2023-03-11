import React from 'react'

export default function Header() {
    return (
        <>
            {/* <!-- Preloader --> */}
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-circle"></div>
                <div className="preloader-img">
                    <img src="assets/img/core-img/leaf.png" alt="" />
                </div>
            </div>

            {/* <!-- ##### Header Area Start ##### --> */}
            <header className="header-area">

                {/* <!-- ***** Top Header Area ***** --> */}
                <div className="top-header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="top-header-content d-flex align-items-center justify-content-between">
                                    {/* <!-- Top Header Content --> */}
                                    <div className="top-header-meta">
                                        <a href="#" data-toggle="tooltip" data-placement="bottom" title="infodeercreative@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i> <span>Email: infodeercreative@gmail.com</span></a>
                                        <a href="#" data-toggle="tooltip" data-placement="bottom" title="+1 234 122 122"><i className="fa fa-phone" aria-hidden="true"></i> <span>Call Us: +1 234 122 122</span></a>
                                    </div>

                                    {/* <!-- Top Header Content --> */}
                                    <div className="top-header-meta d-flex">
                                        {/* <!-- Language Dropdown --> */}
                                        <div className="language-dropdown">
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle mr-30" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language</button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">USA</a>
                                                    <a className="dropdown-item" href="#">UK</a>
                                                    <a className="dropdown-item" href="#">Bangla</a>
                                                    <a className="dropdown-item" href="#">Hindi</a>
                                                    <a className="dropdown-item" href="#">Spanish</a>
                                                    <a className="dropdown-item" href="#">Latin</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Login --> */}
                                        <div className="login">
                                            <a href="#"><i className="fa fa-user" aria-hidden="true"></i> <span>Login</span></a>
                                        </div>
                                        {/* <!-- Cart --> */}
                                        <div className="cart">
                                            <a href="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i> <span>Cart <span className="cart-quantity">(1)</span></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ***** Navbar Area ***** --> */}
                <div className="alazea-main-menu">
                    <div className="classy-nav-container breakpoint-off">
                        <div className="container">
                            {/* <!-- Menu --> */}
                            <nav className="classy-navbar justify-content-between" id="alazeaNav">

                                {/* <!-- Nav Brand --> */}
                                <a href="index.html" className="nav-brand"><img src="assets/img/core-img/logo.png" alt="" /></a>

                                {/* <!-- Navbar Toggler --> */}
                                <div className="classy-navbar-toggler">
                                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                                </div>

                                {/* <!-- Menu --> */}
                                <div className="classy-menu">

                                    {/* <!-- Close Button --> */}
                                    <div className="classycloseIcon">
                                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                    </div>

                                    {/* <!-- Navbar Start --> */}
                                    <div className="classynav">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="#">Pages</a>
                                                <ul className="dropdown">
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="shop.html">Shop</a>
                                                        <ul className="dropdown">
                                                            <li><a href="shop.html">Shop</a></li>
                                                            <li><a href="shop-details.html">Shop Details</a></li>
                                                            <li><a href="cart.html">Shopping Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="portfolio.html">Portfolio</a>
                                                        <ul className="dropdown">
                                                            <li><a href="portfolio.html">Portfolio</a></li>
                                                            <li><a href="single-portfolio.html">Portfolio Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="blog.html">Blog</a>
                                                        <ul className="dropdown">
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="single-post.html">Blog Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="portfolio.html">Portfolio</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>

                                        {/* <!-- Search Icon --> */}
                                        <div id="searchIcon">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </div>

                                    </div>
                                    {/* <!-- Navbar End --> */}
                                </div>
                            </nav>

                            {/* <!-- Search Form --> */}
                            <div className="search-form">
                                <form action="#" method="get">
                                    <input type="search" name="search" id="search" placeholder="Type keywords &amp; press enter..." />
                                        <button type="submit" className="d-none"></button>
                                </form>
                                {/* <!-- Close Icon --> */}
                                <div className="closeIcon"><i className="fa fa-times" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ##### Header Area End ##### --> */}

        </>
    )
}
