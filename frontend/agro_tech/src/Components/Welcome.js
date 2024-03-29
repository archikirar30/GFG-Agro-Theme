import React from 'react'

export default function Welcome() {
    return (
        <>
            {/* <!-- ##### Hero Area Start ##### --> */}
            <section className="hero-area">
                <div className="hero-post-slides owl-carousel owl-theme">
                    {/* <!-- Single Hero Post --> */}
                    <div className="single-hero-post bg-overlay">
                        {/* <!-- Post Image --> */}
                        <div className="slide-img bg-img" style={{ backgroundImage: `url("assets/img/bg-img/1.jpg")` }}></div>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    {/* <!-- Post Content --> */}
                                    <div className="hero-slides-content text-center">
                                        <h2>Plants exist in the weather and light rays that surround them</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ante nec ipsum iaculis, ac iaculis ipsum porttitor. Vivamus cursus nisl lectus, id mattis nisl lobortis eu. Duis diam augue, dapibus ut dolor at, mattis maximus dolor.</p>
                                        <div className="welcome-btn-group">
                                            <a href="#" className="btn alazea-btn mr-30">GET STARTED</a>
                                            <a href="#" className="btn alazea-btn active">CONTACT US</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single Hero Post --> */}
                    <div className="single-hero-post bg-overlay">
                        {/* <!-- Post Image --> */}
                        <div className="slide-img bg-img" style={{ backgroundImage: `url("assets/img/bg-img/2.jpg")` }}></div>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    {/* <!-- Post Content --> */}
                                    <div className="hero-slides-content text-center">
                                        <h2>Plants exist in the weather and light rays that surround them</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque ante nec ipsum iaculis, ac iaculis ipsum porttitor. Vivamus cursus nisl lectus, id mattis nisl lobortis eu. Duis diam augue, dapibus ut dolor at, mattis maximus dolor.</p>
                                        <div className="welcome-btn-group">
                                            <a href="#" className="btn alazea-btn mr-30">GET STARTED</a>
                                            <a href="#" className="btn alazea-btn active">CONTACT US</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ##### Hero Area End ##### --> */}

            {/* <!-- ##### Service Area Start ##### --> */}
            <section className="our-services-area bg-gray section-padding-100-0 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading text-center">
                                <h2>OUR SERVICES</h2>
                                <p>We provide the perfect service for you.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            <div className="alazea-service-area mb-100">

                                {/* <!-- Single Service Area --> */}
                                <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="100ms">
                                    {/* <!-- Icon --> */}
                                    <div className="service-icon mr-30">
                                        <img src="assets/img/core-img/s1.png" alt="" />
                                    </div>
                                    {/* <!-- Content --> */}
                                    <div className="service-content">
                                        <h5>Plants Care</h5>
                                        <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                                    </div>
                                </div>

                                {/* <!-- Single Service Area --> */}
                                <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="300ms">
                                    {/* <!-- Icon --> */}
                                    <div className="service-icon mr-30">
                                        <img src="assets/img/core-img/s2.png" alt="" />
                                    </div>
                                    {/* <!-- Content --> */}
                                    <div className="service-content">
                                        <h5>Pressure Washing</h5>
                                        <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                                    </div>
                                </div>

                                {/* <!-- Single Service Area --> */}
                                <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="500ms">
                                    {/* <!-- Icon --> */}
                                    <div className="service-icon mr-30">
                                        <img src="assets/img/core-img/s3.png" alt="" />
                                    </div>
                                    {/* <!-- Content --> */}
                                    <div className="service-content">
                                        <h5>Tree Service &amp; Trimming</h5>
                                        <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="alazea-video-area bg-overlay mb-100">
                                <img src="assets/img/bg-img/23.jpg" alt="" />
                                <a href="http://www.youtube.com/watch?v=7HKoqNJtMTQ" className="video-icon">
                                    <i className="fa fa-play" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel">
                    <div className="item"><h4>1</h4></div>
                    <div className="item"><h4>2</h4></div>
                    <div className="item"><h4>3</h4></div>
                    <div className="item"><h4>4</h4></div>
                    <div className="item"><h4>5</h4></div>
                    <div className="item"><h4>6</h4></div>
                    <div className="item"><h4>7</h4></div>
                    <div className="item"><h4>8</h4></div>
                    <div className="item"><h4>9</h4></div>
                    <div className="item"><h4>10</h4></div>
                    <div className="item"><h4>11</h4></div>
                    <div className="item"><h4>12</h4></div>
                </div>
            </section>
            {/* <!-- ##### Service Area End ##### --> */}

            {/* <!-- ##### About Area Start ##### --> */}
            <section className="about-us-area section-padding-100-0">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading">
                                <h2>ABOUT US</h2>
                                <p>We are leading in the plants service fields.</p>
                            </div>
                            <p>Quisque orci quam, vulputate non commodo finibus, molestie ac ante. Duis in sceleri quesem. Nulla sit amet varius nunc. Maecenas dui, tempeu ullam corper in.</p>

                            {/* <!-- Progress Bar Content Area --> */}
                            <div className="alazea-progress-bar mb-50">
                                {/* <!-- Single Progress Bar --> */}
                                <div className="single_progress_bar">
                                    <p>Office plants</p>
                                    <div id="bar1" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="80"></span>
                                    </div>
                                </div>

                                {/* <!-- Single Progress Bar --> */}
                                <div className="single_progress_bar">
                                    <p>Field manager</p>
                                    <div id="bar2" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="70"></span>
                                    </div>
                                </div>

                                {/* <!-- Single Progress Bar --> */}
                                <div className="single_progress_bar">
                                    <p>Landscape design</p>
                                    <div id="bar3" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="85"></span>
                                    </div>
                                </div>

                                {/* <!-- Single Progress Bar --> */}
                                <div className="single_progress_bar">
                                    <p>Garden Care</p>
                                    <div id="bar4" className="barfiller">
                                        <div className="tipWrap">
                                            <span className="tip"></span>
                                        </div>
                                        <span className="fill" data-percentage="65"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="alazea-benefits-area">
                                <div className="row">
                                    {/* <!-- Single Benefits Area --> */}
                                    <div className="col-12 col-sm-6">
                                        <div className="single-benefits-area">
                                            <img src="assets/img/core-img/b1.png" alt="" />
                                            <h5>Quality Products</h5>
                                            <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                        </div>
                                    </div>

                                    {/* <!-- Single Benefits Area --> */}
                                    <div className="col-12 col-sm-6">
                                        <div className="single-benefits-area">
                                            <img src="assets/img/core-img/b2.png" alt="" />
                                            <h5>Perfect Service</h5>
                                            <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                        </div>
                                    </div>

                                    {/* <!-- Single Benefits Area --> */}
                                    <div className="col-12 col-sm-6">
                                        <div className="single-benefits-area">
                                            <img src="assets/img/core-img/b3.png" alt="" />
                                            <h5>100% Natural</h5>
                                            <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                        </div>
                                    </div>

                                    {/* <!-- Single Benefits Area --> */}
                                    <div className="col-12 col-sm-6">
                                        <div className="single-benefits-area">
                                            <img src="assets/img/core-img/b4.png" alt="" />
                                            <h5>Environmentally friendly</h5>
                                            <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="border-line"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ##### About Area End ##### --> */}

            {/* <!-- ##### Portfolio Area Start ##### --> */}
            <section className="alazea-portfolio-area section-padding-100-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading text-center">
                                <h2>OUR PORTFOLIO</h2>
                                <p>We devote all of our experience and efforts for creation</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="alazea-portfolio-filter">
                                <div className="portfolio-filter">
                                    <button className="btn active" data-filter="*">All</button>
                                    <button className="btn" data-filter=".design">Coffee Design</button>
                                    <button className="btn" data-filter=".garden">Garden</button>
                                    <button className="btn" data-filter=".home-design">Home Design</button>
                                    <button className="btn" data-filter=".office-design">Office Design</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row alazea-portfolio">

                        {/* <!-- Single Portfolio Area --> */}
                        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design home-design wow fadeInUp" data-wow-delay="100ms">
                            {/* <!-- Portfolio Thumbnail --> */}
                            <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: "url(assets/img/bg-img/16.jpg)" }}></div>
                            {/* <!-- Portfolio Hover Text --> */}
                            <div className="portfolio-hover-overlay">
                                <a href="img/bg-img/16.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 1">
                                    <div className="port-hover-text">
                                        <h3>Minimal Flower Store</h3>
                                        <h5>Office Plants</h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* <!-- Single Portfolio Area --> */}
                        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden wow fadeInUp" data-wow-delay="200ms">
                            {/* <!-- Portfolio Thumbnail --> */}
                            <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: "url(assets/img/bg-img/17.jpg)" }}></div>
                            {/* <!-- Portfolio Hover Text --> */}
                            <div className="portfolio-hover-overlay">
                                <a href="img/bg-img/17.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 2">
                                    <div className="port-hover-text">
                                        <h3>Minimal Flower Store</h3>
                                        <h5>Office Plants</h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* <!-- Single Portfolio Area --> */}
                        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden design wow fadeInUp" data-wow-delay="300ms">
                            {/* <!-- Portfolio Thumbnail --> */}
                            <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: "url(assets/img/bg-img/18.jpg)" }}></div>
                            {/* <!-- Portfolio Hover Text --> */}
                            <div className="portfolio-hover-overlay">
                                <a href="img/bg-img/18.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 3">
                                    <div className="port-hover-text">
                                        <h3>Minimal Flower Store</h3>
                                        <h5>Office Plants</h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* <!-- Single Portfolio Area --> */}
                        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden office-design wow fadeInUp" data-wow-delay="400ms">
                            {/* <!-- Portfolio Thumbnail --> */}
                            <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: "url(assets/img/bg-img/19.jpg)" }}></div>
                            {/* <!-- Portfolio Hover Text --> */}
                            <div className="portfolio-hover-overlay">
                                <a href="img/bg-img/19.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 4">
                                    <div className="port-hover-text">
                                        <h3>Minimal Flower Store</h3>
                                        <h5>Office Plants</h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* <!-- Single Portfolio Area --> */}
                        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design office-design wow fadeInUp" data-wow-delay="100ms">
                            {/* <!-- Portfolio Thumbnail --> */}
                            <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: "url(assets/img/bg-img/20.jpg)" }}></div>
                            {/* <!-- Portfolio Hover Text --> */}
                            <div className="portfolio-hover-overlay">
                                <a href="img/bg-img/20.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 5">
                                    <div className="port-hover-text">
                                        <h3>Minimal Flower Store</h3>
                                        <h5>Office Plants</h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* <!-- Single Portfolio Area --> */}
                        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden wow fadeInUp" data-wow-delay="200ms">
                            {/* <!-- Portfolio Thumbnail --> */}
                            <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: "url(assets/img/bg-img/21.jpg)" }}></div>
                            {/* <!-- Portfolio Hover Text --> */}
                            <div className="portfolio-hover-overlay">
                                <a href="img/bg-img/21.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 6">
                                    <div className="port-hover-text">
                                        <h3>Minimal Flower Store</h3>
                                        <h5>Office Plants</h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* <!-- Single Portfolio Area --> */}
                        <div className="col-12 col-lg-6 single_portfolio_item home-design wow fadeInUp" data-wow-delay="300ms">
                            {/* <!-- Portfolio Thumbnail --> */}
                            <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: "url(assets/img/bg-img/22.jpg)" }}></div>
                            {/* <!-- Portfolio Hover Text --> */}
                            <div className="portfolio-hover-overlay">
                                <a href="img/bg-img/22.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 7">
                                    <div className="port-hover-text">
                                        <h3>Minimal Flower Store</h3>
                                        <h5>Office Plants</h5>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- ##### Portfolio Area End ##### --> */}

            {/* <!-- ##### Testimonial Area Start ##### --> */}
            <section className="testimonial-area section-padding-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonials-slides owl-carousel">

                                {/* <!-- Single Testimonial Slide --> */}
                                <div className="single-testimonial-slide">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-6">
                                            <div className="testimonial-thumb">
                                                <img src="assets/img/bg-img/13.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="testimonial-content">
                                                {/* <!-- Section Heading --> */}
                                                <div className="section-heading">
                                                    <h2>TESTIMONIAL</h2>
                                                    <p>Some kind words from clients about Alazea</p>
                                                </div>
                                                <p>“Alazea is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!”</p>
                                                <div className="testimonial-author-info">
                                                    <h6>Mr. Nick Jonas</h6>
                                                    <p>CEO of NAVATECH</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Single Testimonial Slide --> */}
                                <div className="single-testimonial-slide">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-6">
                                            <div className="testimonial-thumb">
                                                <img src="assets/img/bg-img/14.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="testimonial-content">
                                                {/* <!-- Section Heading --> */}
                                                <div className="section-heading">
                                                    <h2>TESTIMONIAL</h2>
                                                    <p>Some kind words from clients about Alazea</p>
                                                </div>
                                                <p>“Alazea is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!”</p>
                                                <div className="testimonial-author-info">
                                                    <h6>Mr. Nazrul Islam</h6>
                                                    <p>CEO of NAVATECH</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Single Testimonial Slide --> */}
                                <div className="single-testimonial-slide">
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md-6">
                                            <div className="testimonial-thumb">
                                                <img src="assets/img/bg-img/15.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <div className="testimonial-content">
                                                {/* <!-- Section Heading --> */}
                                                <div className="section-heading">
                                                    <h2>TESTIMONIAL</h2>
                                                    <p>Some kind words from clients about Alazea</p>
                                                </div>
                                                <p>“Alazea is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!”</p>
                                                <div className="testimonial-author-info">
                                                    <h6>Mr. Jonas Nick</h6>
                                                    <p>CEO of NAVATECH</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ##### Testimonial Area End ##### --> */}

            {/* <!-- ##### Product Area Start ##### --> */}
            <section className="new-arrivals-products-area bg-gray section-padding-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading text-center">
                                <h2>NEW ARRIVALS</h2>
                                <p>We have the latest products, it must be exciting for you</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {/* <!-- Single Product Area --> */}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="100ms">
                                {/* <!-- Product Image --> */}
                                <div className="product-img">
                                    <a href="shop-details.html"><img src="assets/img/bg-img/9.jpg" alt="" /></a>
                                    {/* <!-- Product Tag --> */}
                                    <div className="product-tag">
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product-meta d-flex">
                                        <a href="#" className="wishlist-btn"><i className="icon_heart_alt"></i></a>
                                        <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                                        <a href="#" className="compare-btn"><i className="arrow_left-right_alt"></i></a>
                                    </div>
                                </div>
                                {/* <!-- Product Info --> */}
                                <div className="product-info mt-15 text-center">
                                    <a href="shop-details.html">
                                        <p>Cactus Flower</p>
                                    </a>
                                    <h6>$10.99</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Product Area --> */}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="200ms">
                                {/* <!-- Product Image --> */}
                                <div className="product-img">
                                    <a href="shop-details.html"><img src="assets/img/bg-img/10.jpg" alt="" /></a>
                                    <div className="product-meta d-flex">
                                        <a href="#" className="wishlist-btn"><i className="icon_heart_alt"></i></a>
                                        <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                                        <a href="#" className="compare-btn"><i className="arrow_left-right_alt"></i></a>
                                    </div>
                                </div>
                                {/* <!-- Product Info --> */}
                                <div className="product-info mt-15 text-center">
                                    <a href="shop-details.html">
                                        <p>Cactus Flower</p>
                                    </a>
                                    <h6>$10.99</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Product Area --> */}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="300ms">
                                {/* <!-- Product Image --> */}
                                <div className="product-img">
                                    <a href="shop-details.html"><img src="assets/img/bg-img/11.jpg" alt="" /></a>
                                    <div className="product-meta d-flex">
                                        <a href="#" className="wishlist-btn"><i className="icon_heart_alt"></i></a>
                                        <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                                        <a href="#" className="compare-btn"><i className="arrow_left-right_alt"></i></a>
                                    </div>
                                </div>
                                {/* <!-- Product Info --> */}
                                <div className="product-info mt-15 text-center">
                                    <a href="shop-details.html">
                                        <p>Cactus Flower</p>
                                    </a>
                                    <h6>$10.99</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Product Area --> */}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="400ms">
                                {/* <!-- Product Image --> */}
                                <div className="product-img">
                                    <a href="shop-details.html"><img src="assets/img/bg-img/12.jpg" alt="" /></a>
                                    {/* <!-- Product Tag --> */}
                                    <div className="product-tag sale-tag">
                                        <a href="#">Hot</a>
                                    </div>
                                    <div className="product-meta d-flex">
                                        <a href="#" className="wishlist-btn"><i className="icon_heart_alt"></i></a>
                                        <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                                        <a href="#" className="compare-btn"><i className="arrow_left-right_alt"></i></a>
                                    </div>
                                </div>
                                {/* <!-- Product Info --> */}
                                <div className="product-info mt-15 text-center">
                                    <a href="shop-details.html">
                                        <p>Cactus Flower</p>
                                    </a>
                                    <h6>$10.99</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 text-center">
                            <a href="#" className="btn alazea-btn">View All</a>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- ##### Product Area End ##### --> */}

            {/* <!-- ##### Blog Area Start ##### --> */}
            <section className="alazea-blog-area section-padding-100-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading text-center">
                                <h2>LATEST NEWS</h2>
                                <p>The breaking news about Gardening &amp; House plants</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">

                        {/* <!-- Single Blog Post Area --> */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-blog-post mb-100">
                                <div className="post-thumbnail mb-30">
                                    <a href="single-post.html"><img src="assets/img/bg-img/6.jpg" alt="" /></a>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">
                                        <h5>Garden designers across the country forecast ideas shaping the gardening world in 2018</h5>
                                    </a>
                                    <div className="post-meta">
                                        <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                                        <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Alan Jackson</a>
                                    </div>
                                    <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post Area --> */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-blog-post mb-100">
                                <div className="post-thumbnail mb-30">
                                    <a href="single-post.html"><img src="assets/img/bg-img/7.jpg" alt="" /></a>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">
                                        <h5>2018 Midwest Tree and Shrub Conference: Resilient Plants for a Lasting Landscape</h5>
                                    </a>
                                    <div className="post-meta">
                                        <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 20 Jun 2018</a>
                                        <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Christina Aguilera</a>
                                    </div>
                                    <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Single Blog Post Area --> */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single-blog-post mb-100">
                                <div className="post-thumbnail mb-30">
                                    <a href="single-post.html"><img src="assets/img/bg-img/8.jpg" alt="" /></a>
                                </div>
                                <div className="post-content">
                                    <a href="single-post.html" className="post-title">
                                        <h5>The summer coming up, it’s time for both us and the flowers to soak up the sunshine</h5>
                                    </a>
                                    <div className="post-meta">
                                        <a href="#"><i className="fa fa-clock-o" aria-hidden="true"></i> 19 Jun 2018</a>
                                        <a href="#"><i className="fa fa-user" aria-hidden="true"></i> Mason Jenkins</a>
                                    </div>
                                    <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- ##### Blog Area End ##### --> */}

            {/* <!-- ##### Subscribe Area Start ##### --> */}
            <section className="subscribe-newsletter-area" style={{ backgroundImage: "url(assets/img/bg-img/subscribe.png)" }}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-5">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading mb-0">
                                <h2>Join the Newsletter</h2>
                                <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="subscribe-form">
                                <form action="#" method="get">
                                    <input type="email" name="subscribe-email" id="subscribeEmail" placeholder="Enter your email" />
                                    <button type="submit" className="btn alazea-btn">SUBSCRIBE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Subscribe Side Thumbnail --> */}
                <div className="subscribe-side-thumb wow fadeInUp" data-wow-delay="500ms">
                    <img className="first-img" src="assets/img/core-img/leaf.png" alt="" />
                </div>
            </section>
            {/* <!-- ##### Subscribe Area End ##### --> */}

            {/* <!-- ##### Contact Area Start ##### --> */}
            <section className="contact-area section-padding-100-0">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-5">
                            {/* <!-- Section Heading --> */}
                            <div className="section-heading">
                                <h2>GET IN TOUCH</h2>
                                <p>Send us a message, we will call back later</p>
                            </div>
                            {/* <!-- Contact Form Area --> */}
                            <div className="contact-form-area mb-100">
                                <form action="#" method="post">
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="contact-name" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" id="contact-email" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="contact-subject" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn alazea-btn mt-15">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6">
                            {/* <!-- Google Maps --> */}
                            <div className="map-area mb-100">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ##### Contact Area End ##### --> */}
        </>
    )
}
