import React from 'react'

export default function Checkout() {
  return (
    <>
       {/*   ##### Breadcrumb Area Start ##### */} 
    <div className="breadcrumb-area">
         {/* Top Breadcrumb Area */}
        <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: "url(assets/img/bg-img/24.jpg)"}}>
            <h2>Checkout</h2>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#"><i className="fa fa-home"></i> Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
     {/* ##### Breadcrumb Area End ##### */}

     {/* ##### Checkout Area Start ##### */}
    <div className="checkout_area mb-100">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-12 col-lg-7">
                    <div className="checkout_details_area clearfix">
                        <h5>Billing Details</h5>
                        <form action="#" method="post">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <label for="first_name">First Name *</label>
                                    <input type="text" className="form-control" id="first_name" value="" required/>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label for="last_name">Last Name *</label>
                                    <input type="text" className="form-control" id="last_name" value="" required/>
                                </div>
                                <div className="col-12 mb-4">
                                    <label for="email_address">Email Address *</label>
                                    <input type="email" className="form-control" id="email_address" value=""/>
                                </div>
                                <div className="col-12 mb-4">
                                    <label for="phone_number">Phone Number *</label>
                                    <input type="number" className="form-control" id="phone_number" min="0" value=""/>
                                </div>
                                <div className="col-12 mb-4">
                                    <label for="company">Company Name</label>
                                    <input type="text" className="form-control" id="company" value=""/>
                                </div>
                                <div className="col-12 mb-4">
                                    <label for="company">Address *</label>
                                    <input type="text" className="form-control" id="address" value=""/>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label for="city">Town/City *</label>
                                    <input type="text" className="form-control" id="city" value=""/>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label for="state">State/Province *</label>
                                    <input type="text" className="form-control" id="state" value=""/>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label for="country">Country</label>
                                    <select className="custom-select d-block w-100" id="country">
                                        <option value="usa">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="ger">Germany</option>
                                        <option value="fra">France</option>
                                        <option value="ind">India</option>
                                        <option value="aus">Australia</option>
                                        <option value="bra">Brazil</option>
                                        <option value="cana">Canada</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <label for="postcode">Postcode/Zip</label>
                                    <input type="text" className="form-control" id="postcode" value=""/>
                                </div>
                                <div className="col-md-12 mb-4">
                                    <label for="order-notes">Order Notes</label>
                                    <textarea className="form-control" id="order-notes" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex align-items-center">
                                         {/* Single Checkbox */}
                                        <div className="custom-control custom-checkbox d-flex align-items-center mr-30">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                            <label className="custom-control-label" for="customCheck1">Ship to a different address?</label>
                                        </div>
                                         {/* Single Checkbox */}
                                        <div className="custom-control custom-checkbox d-flex align-items-center">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                            <label className="custom-control-label" for="customCheck2">Create an account?</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="checkout-content">
                        <h5 className="title--">Your Order</h5>
                        <div className="products">
                            <div className="products-data">
                                <h5>Products:</h5>
                                <div className="single-products d-flex justify-content-between align-items-center">
                                    <p>Recuerdos Plant</p>
                                    <h5>$9.99</h5>
                                </div>
                            </div>
                        </div>
                        <div className="subtotal d-flex justify-content-between align-items-center">
                            <h5>Subtotal</h5>
                            <h5>$9.99</h5>
                        </div>
                        <div className="shipping d-flex justify-content-between align-items-center">
                            <h5>Shipping</h5>
                            <h5>$3.00</h5>
                        </div>
                        <div className="order-total d-flex justify-content-between align-items-center">
                            <h5>Order Total</h5>
                            <h5>$12.99</h5>
                        </div>
                        <div className="checkout-btn mt-30">
                            <a href="#" className="btn alazea-btn w-100">Place Order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* ##### Checkout Area End ##### */}

    </>
  )
}
