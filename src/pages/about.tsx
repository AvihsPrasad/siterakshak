import logo from '../../public/SR.png'
function About() {
    return (
        <div className="contact-page">
            <div className="bannerblock d-flex justify-content-center align-items-center">
                <div className="container">
                    <h1>We are the people who takecare your assets.</h1>
                    <p>We excel in managing ur properties on behalf of you, secure them from getting occupied by any unknow entity.</p>
                    {/* <div><button type="button" className="btn btn-dark btn-lg">Know More</button></div> */}
                </div>
            </div>
            <div className="about-info pad-80">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-sm-12 col-md-6 col-lg-6 logo-block">
                            <div className="card">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    {/* <span>SG</span> */}
                                    <img src={logo} alt="Logo" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="title">ABOUT US</div>
                            <div className="heading">A better team with <span>good services</span></div>
                            <p>We excel in managing ur properties on behalf of you, secure them from getting occupied by any unknow entity.</p>
                            <div><a href={`/contact`} className="btn btn-dark btn-lg">Contact Us</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="get-in-touch pad-80">
                <div className="container">
                    <div className="intro-block">
                        <h2><span>That's all about us</span></h2>
                        <p>We are excited about the opportunity to help your queries, question and how we can help you achieve solution to your issues.</p>
                        <a className="btn btn-outline-light" href={`/contact`}>Get in touch</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;