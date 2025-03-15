import cleaning from '../assets/images/cleaning.svg'
import fence from '../assets/images/fence.svg'
import customerService from '../assets/images/customService.svg'
import doc from '../assets/images/doc.svg'
import manage from '../assets/images/manage.svg'

function Service() {
    return (
        <div className="Service-page">
            <div className="bannerblock d-flex justify-content-center align-items-center">
                <div className="container">
                    <h1>We provide services on guarding your Land/Properties.</h1>
                    <p>Choose your required services or get a custom one, to your needs.</p>
                    <div><button type="button" className="btn btn-dark btn-lg">Book a call</button></div>
                </div>
            </div>
            <div className="pad-80" style={{ background: '#667085', color: '#fff' }}>
                <div className="container">
                    <div className="intro-block">
                        <h2><span>Services</span></h2>
                        <p>We excel in managing ur properties on behalf of you, secure them from getting occupied by any unknow entity.</p>
                    </div>
                </div>
            </div>
            <div className="pad-80">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="asset-images">
                                <img src={cleaning} alt="Logo" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 service-type">
                            <h4>Cleaning</h4>
                            <p>
                                We make sure and help you keep you property clean by removing the waste products and dirt periodically. we also share images of before and after.
                            </p>
                            <div>
                                pricing qutation: 2.5rs/sqft.
                            </div>
                            <button className="btn btn-dark mt-4" type="submit">Book service.</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pad-80 bg-white">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-sm-12 col-md-6 col-lg-6 service-type">
                            <h4>Fencing</h4>
                            <p>
                                Help you secue your property boundry, from entring of unknow individual without permission and spread a chaos, by planting or construcing fence around it, with different approch based on requirement. Also we guide with appropriate type.
                            </p>
                            <ul>
                                <li><p>Brick wall</p></li>
                                <li><p>Barbed Wire Fencing</p></li>
                                <li><p>Chain Link Fencing/Woven Wire Fencing</p></li>
                                <li><p>Electric Fencing</p></li>
                                <li><p>Solar Fencing</p></li>
                            </ul>
                            {/* <div>
                                pricing qutation: 2.5rs/sqft.
                            </div> */}
                            <button className="btn btn-dark mt-4" type="submit">Select your choice.</button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="asset-images">
                                <img src={fence} alt="Logo" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="pad-80">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="asset-images">
                                <img src={doc} alt="Logo" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 service-type">
                            <h4>Documentation</h4>
                            <p>
                                We get legal documents of the property and help you keep them up-to date. Also we pay your bills like property taxes etc, on ur behalf. and many more.
                            </p>
                            {/* <div>
                                pricing qutation: 2.5rs/sqft.
                            </div> */}
                            <a className="btn btn-dark mt-4" href={`/documentation`}>Know more.</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pad-80 bg-white">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-sm-12 col-md-6 col-lg-6 service-type">
                            <h4>Managing</h4>
                            <p>
                                We mantain land, site, properties etc, by making a constant watchout for every certain period of time by sending photos and videos and also live video call to show the property by our agent. me also level the ground.
                            </p>
                            {/* <div>
                                pricing qutation: 2.5rs/sqft.
                            </div> */}
                            <button className="btn btn-dark mt-4" type="submit">Book service.</button>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="asset-images">
                                <img src={manage} alt="Logo" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pad-80">
                <div className="container">
                    <div className="row m-0">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="asset-images">
                                <img src={customerService} alt="Logo" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 service-type">
                            <h4>Other Services</h4>
                            <p>
                                We excel in managing ur properties on behalf of you, secure them from getting occupied by any unknow entity. We excel in managing ur properties on behalf of you, secure them from getting occupied by any unknow entity.
                            </p>
                            <ul>
                                <li>
                                    <p>We create a power of atorreny to buy or sell properties, while you are out of country or un-available for transaction.</p>
                                </li>
                                <li>
                                    <p>We install webcam on propertiesm so you can have a live feed. (coming soon)</p>  
                                </li>
                            </ul>
                            <button className="btn btn-dark mt-4" type="submit">Book service.</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="get-in-touch pad-80">
                <div className="container">
                    <div className="intro-block">
                        <h2><span>That's all about us</span></h2>
                        <p>We are excited about the opportunity to help your queries, question and how we can help you achieve solution to your issues.</p>
                        <button className="btn btn-outline-light" type="button">Get in touch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;