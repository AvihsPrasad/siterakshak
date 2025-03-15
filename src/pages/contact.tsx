function Contact() {
    return (
        <div className="Contact-page">
            <div className="bannerblock d-flex justify-content-center align-items-center">
                <div className="container">
                    <h1>Our team of experts are here to help.</h1>
                    <p>Get support 24/7, with our top notch support team.</p>
                    <div><button type="button" className="btn btn-dark btn-lg">Book a call</button></div>
                </div>
            </div>
            <div className="contact-form pad-80 bg-white">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <div className="contact-info">
                                        <div className="title">Request from Support team.</div>
                                    </div>
                                    <div className="form">
                                        <form action="">
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">First name*</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Email*</label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={5}></textarea>
                                            </div>
                                            <div className="d-grid gap-2">
                                                <button className="btn btn-dark" type="button">Send Mail</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="contact-info">
                                <div className="title">Email Support</div>
                                <p>Email us and we will get back to you within 24 hours.</p>
                                <a>support@siteraksha.com</a>
                            </div>
                            <div className="contact-info">
                                <div className="title">Chat to Support</div>
                                <p>Chat to our staff 24/7 for instant access to support.</p>
                                <a>Start live chat</a>
                            </div>
                            <div className="contact-info">
                                <div className="title">Call us</div>
                                <p>Call our customer care with 24/7 service.</p>
                                <a>+91 9087654321</a>
                                <a>+91 9807654321</a>
                            </div>
                            <div className="contact-info">
                                <div className="title">Bangalore</div>
                                <p>Main branch office.</p>
                                <a>address</a>
                            </div>
                            {/* <div className="contact-info">
                                <div className="title">Chat to Support</div>
                                <p>Chat to our staff 24/7 for instant access to support.</p>
                                <a>Start live chat</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;