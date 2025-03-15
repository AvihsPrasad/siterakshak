function Footer() {
    return (
        <div className="footerBlock pad-80">
            <div className="container">
                <div className="row m-0">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <h1>Site Rakshak</h1>
                        <p>Designed by Shivaprasad KS</p>
                        <p>@ 2025. All rights reserved</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 list-url">
                        <ul>
                            <li>Services</li>
                            <li>Documentation</li>
                            <li>About Us</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 contact">
                        <div>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </div>
                        <div className="contact-details">
                            <div><i className="fa fa-phone" aria-hidden="true"></i> +91 9087654321</div>
                            <div><i className="fa fa-envelope" aria-hidden="true"></i> sitegaurdcare@gmail.com</div>
                            <div><i className="fa fa-map-marker" aria-hidden="true"></i> #34, Budda office, Near Mothi circle, bellary, 583101. </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;