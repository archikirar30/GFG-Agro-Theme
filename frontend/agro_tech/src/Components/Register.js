import React from 'react'

export default function Register() {
    return (
        <>
             {/*##### Breadcrumb Area Start ##### */}
             <div className="breadcrumb-area">
                {/*Top Breadcrumb Area */}
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: "url(assets/img/bg-img/24.jpg)" }}>
                    <h2>Shop</h2>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#"><i className="fa fa-home"></i> Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/*##### Breadcrumb Area End ##### */}

            {/* <!--Causes Start--> */}
            <section className="col-12 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="myaccount-form">
                                <h3>Register Your Account</h3>
                                <form>
                                    <ul className="row">
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Your Name" required />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Contact #" required />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Email Address" required />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="User Name" />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Password" />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Re-enter Password" />
                                            </div>
                                        </li>
                                        <li className="col-md-12 my-2">
                                            <div className="input-group form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" for="exampleCheck1">I agree to the Terms of <a href="#">Services & Privacy Plicy</a></label>
                                            </div>
                                        </li>
                                        <li className="col-md-12 my-2">
                                            <button className="btn alazea-btn mt-15">Register Your Account</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="login-box">
                                <h3>Login Account</h3>
                                <form>
                                    <div className="input-group my-3">
                                        <input type="text" className="form-control" placeholder="Username/Email" required />
                                    </div>
                                    <div className="input-group my-3">
                                        <input type="password" className="form-control" placeholder="Password" required />
                                    </div>
                                    <div className="input-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                        <label className="form-check-label" for="exampleCheck2">Remember Me</label>
                                        <a href="#" className="fp mp-right">Forgot Password</a>
                                    </div>
                                    <div className="input-group my-3">
                                        <button className="login-btn">Login Account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Causes End--> */}
        </>
    )
}
