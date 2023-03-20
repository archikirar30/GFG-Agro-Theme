import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import GoogleLogin from 'react-google-login';

export default function Register() {

    // For Registration
    const [name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone_number, setPhone] = useState("");
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [states, setUserstate] = useState("");
    const [district, setDistrict] = useState("");
    const [pincode, setPincode] = useState("");
    const [message, setmessage] = useState("");
    const [loginmsg, setLoginmsg] = useState("")
    const [loginemail, setLoginemail] = useState("");
    const [loginpassword, setLoginpassword] = useState("");

    // Function to do Signup
    async function singUp(e) {
        e.preventDefault();

        // const item = { name, email, password, phone_number, first_name, last_name, states, district, pincode };
        let stores = {
            "name": name,
            "email": email,
            "password": password,
            "phone_number": phone_number,
            "first_name": first_name,
            "last_name": last_name,
            "states": states,
            "district": district,
            "pincode": pincode,
        }

        console.log(stores);
        const res = await axios.post('http://localhost:3000/register', stores);
        console.log(res.data.message);
        setmessage(res.data.message);
        if (res.data.message == "The user has been successfully inserted.") {
            alert(res.data.message)
            document.getElementById("registration_form").reset();
            setUsername(""); setDistrict(""); setEmail("");
            setFirstname(""); setLastname(""); setPhone("");
            setPassword(""); setPincode(""); setUserstate("");
            // setmessage("")
        }

        // try {
        // const res = await axios.post('http://localhost:3000/register', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Accept:'application/json',
        //     },
        //     data:stores,
        // });
        // console.log(res)
        // } catch (e) {
        //     alert(e)
        // }

        // axios.post('http://localhost:3000/register', {
        //     name, email, password, phone_number, first_name, last_name, states, district, pincode
        // })
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // fetch("http://localhost:3000/register", {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": 'application/json',
        //         "Accept": 'application/json'
        //     },
        //     body: JSON.stringify(stores),
        // }).then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err.message))

    }

    // Function for Login
    async function Login(e) {
        e.preventDefault();

        let login_cred = { "email":loginemail, "password":loginpassword }

        console.log(login_cred)

        let result = await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(login_cred),
        });
        result = await result.json();
        console.log(result.message);
        setLoginmsg(result.message)
        if(loginmsg != null){
            setLoginemail('');
            setLoginpassword('');
            setTimeout(() => {
                setLoginmsg('')
            }, 4000);
        }
        localStorage.setItem('login-info',JSON.stringify(result));
        // history.push("/add");

    }

    const responseGoogle = (response) => {
        console.log(response);
    }


    return (
        <>
            {/*##### Breadcrumb Area Start ##### */}
            <div className="breadcrumb-area">
                {/*Top Breadcrumb Area */}
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: "url(assets/img/bg-img/24.jpg)" }}>
                    <h2>Register</h2>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#"><i className="fa fa-home"></i> Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Register</li>
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
                                <div className="alert">{message}</div>
                                <form id='registration_form'>
                                    <ul className="row">
                                        <li className="col-md-6 my-2">
                                            <div className="input-group form-floating">
                                                <input type="text" name='name' className="form-control" placeholder="Username"
                                                    value={name} onChange={(e) => setUsername(e.target.value)} />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" name='email' className="form-control" placeholder="Email" required
                                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="password" name='password' className="form-control" placeholder="Password"
                                                    required value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" name='phone_number' className="form-control" placeholder="Contact" required
                                                    value={phone_number} onChange={(e) => setPhone(e.target.value)} />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" name='first_name' className="form-control" placeholder="First Name" required
                                                    value={first_name} onChange={(e) => setFirstname(e.target.value)} />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" name='last_name' className="form-control" placeholder="Last Name" required
                                                    value={last_name} onChange={(e) => setLastname(e.target.value)} />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" name='states' className="form-control" placeholder="State"
                                                    value={states} onChange={(e) => setUserstate(e.target.value)} />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" name='district' className="form-control" placeholder="District"
                                                    value={district} onChange={(e) => setDistrict(e.target.value)} />
                                            </div>
                                        </li>
                                        <li className="col-md-6 my-2">
                                            <div className="input-group">
                                                <input type="text" name='pincode' className="form-control" placeholder="Pincode"
                                                    value={pincode} onChange={(e) => setPincode(e.target.value)} />
                                            </div>
                                        </li>
                                        <li className="col-md-12 my-2">
                                            <div className="input-group form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">I agree to the Terms of <a href="#">Services & Privacy Plicy</a></label>
                                            </div>
                                        </li>
                                        <li className="col-md-12 my-2">
                                            <button onClick={singUp} className="btn alazea-btn mt-15">Register Your Account</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="login-box">
                                <h3>Login Account</h3>
                                <div className="alert">{loginmsg}</div>
                                <form>
                                    <div className="input-group my-3">
                                        <input type="text" className="form-control" placeholder="Username/Email" required
                                            value={loginemail} onChange={(e) => setLoginemail(e.target.value)} />
                                    </div>
                                    <div className="input-group my-3">
                                        <input type="password" className="form-control" placeholder="Password" required
                                            value={loginpassword} onChange={(e) => setLoginpassword(e.target.value)} />
                                    </div>
                                    <div className="input-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                                        <label className="form-check-label" htmlFor="exampleCheck2">Remember Me</label>
                                        <a href="#" className="fp mp-right">Forgot Password</a>
                                    </div>
                                    <div className="input-group my-3">
                                        <button onClick={Login} className="login-btn">Login Account</button>
                                    </div>
                                </form>
                                {/* <!-- Social buttons and divider --> */}
                                <div className="row">

                                    {/* <!-- Social btn --> */}
                                    <div className="input-group my-3">
                                        <GoogleLogin
                                            buttonText='Login with Google'
                                            clientId='252102314879-rr5qdra1j8nredtjr6etrl1tkmv26jqf.apps.googleusercontent.com'
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </div>
                                    {/* <!-- Social btn --> */}
                                    <div className="input-group my-3">
                                        <button className="login-btn"><i className="bi bi-facebook text-white me-2"></i>Login with Facebook</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Causes End--> */}
        </>
    )
}
