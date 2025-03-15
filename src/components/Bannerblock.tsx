import { useState } from "react";

function Bannerblock() {
    const [pak, setPak] = useState(true);
    return (
        <div className="homepage">
            <div className="bannerblock d-flex justify-content-center align-items-center">
                <div className="container">
                    <h1>Safe guard your property.</h1>
                    <p>We excel in managing ur properties on behalf of you, secure them from getting occupied by any unknow entity.</p>
                    {/* <div><button type="button" className="btn btn-dark btn-lg">Know More</button></div> */}
                </div>
            </div>
            <div className="statusBlock pad-80">
                <div className="container">
                    <div className="intro-block">
                        <h2><span>Available on all major cities.</span></h2>
                        <p>24/7 support and trusted by many clients, with top-notch reviews and rating.</p>
                    </div>
                    <div className="row m-0">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h3>Trusted By</h3>
                            <p>24000+</p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h3>Rating</h3>
                            <p>4.6/5</p>
                        </div>
                        <div className="col-sm-4 col-md-4 col-lg-4">
                            <h3>Support</h3>
                            <p>24/7</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="serviceBlock pad-80 bg-white">
                <div className="container">
                    <div className="intro-block">
                        <h2><span>Our Services Offering</span></h2>
                        <p>Multiple services to make your life better.</p>
                    </div>
                    <div className="row m-0">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="service-icon"><i className="fa fa-leaf" aria-hidden="true"></i></div>
                                    <div className="service-title">Cleaning</div>
                                    <p>Cleaning land, or land clearing, involves removing vegetation, obstacles, and debris to clean an area.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="service-icon"><i className="fa fa-map-signs" aria-hidden="true"></i></div>
                                    <div className="service-title">Fencing</div>
                                    <p>Fencing land serves various crucial purposes, from defining property boundaries to providing security and containing livestock.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="service-icon"><i className="fa fa-book" aria-hidden="true"></i></div>
                                    <div className="service-title">Documentation</div>
                                    <p>Obtaining the necessary legal documents for land-related matters can be complex, as it varies significantly based on the specific purpose and location. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="service-icon"><i className="fa fa-camera" aria-hidden="true"></i></div>
                                    <div className="service-title">Managing</div>
                                    <p>Protecting your land, site, properties from being occupied by other individuals illegally. By getting timely update from time to time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonialBlock pad-80">
                <div className="container">
                    <div className="intro-block">
                        <h2><span>Client Testimonial</span></h2>
                        <p>Our dedication to excellence drives us to truly understand and meet the unique needs of each customer.</p>
                    </div>
                    <div className="row m-0">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <p className="testimonial-text">
                                        We excel in managing ur properties on behalf of you, secure them from getting occupied by any unknow entity.
                                    </p>
                                    <div className="d-flex flex-row align-items-end">
                                        {/* <div className="profile-icon">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </div> */}
                                        <div className="profile-detail">
                                            <p>Shivaprasad KS</p>
                                            <div className="rating">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="card bg-secondary bg-gradient">
                                <div className="card-body">
                                    <p className="testimonial-text">
                                        We excel in managing ur properties on behalf of you, secure them from getting occupied by any unknow entity.
                                    </p>
                                    <div className="d-flex flex-row align-items-end">
                                        {/* <div className="profile-icon">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </div> */}
                                        <div className="profile-detail">
                                            <p>Shivaprasad KS</p>
                                            <div className="rating">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <p className="testimonial-text">
                                        We excel in managing ur properties on behalf of you, secure them from getting occupied by any unknow entity.
                                    </p>
                                    <div className="d-flex flex-row align-items-end">
                                        {/* <div className="profile-icon">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </div> */}
                                        <div className="profile-detail">
                                            <p>Shivaprasad KS</p>
                                            <div className="rating">
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star" aria-hidden="true"></i>
                                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="packagesBlock pad-80 bg-white">
                <div className="container">
                    <div className="intro-block">
                        <h2><span>Basic service Plans</span></h2>
                        <p>A new and better way to acquire, engage and support customers.</p>
                        <div className="d-flex package-period justify-content-center">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className={pak ?'nav-link bg-dark active': 'nav-link'} onClick={() => setPak(!pak)}>Monthly</a>
                                </li>
                                <li className="nav-item">
                                    <a className={ !pak ?'nav-link bg-dark active': 'nav-link'} onClick={() => setPak(!pak)}>Annual</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row m-0">
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="plan-text">Basic</div>
                                        <div className="price">{pak?  1000 : 1000*5}<i className="fa fa-inr" aria-hidden="true"></i></div>
                                        <div className="price-details">Per month. billed annually.</div>
                                        <div className="price-heading">List of Basic services provide for this price.</div>
                                        <div className="price-descp">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Personal visit to Property</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Site Cleaning</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Property Photographs </li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Video of Property</li>
                                                <li className="list-group-item text-decoration-line-through"><i className="fa fa-check-square" aria-hidden="true"></i> Live Video Call</li>
                                                <li className="list-group-item text-decoration-line-through"><i className="fa fa-check-square" aria-hidden="true"></i> Asset Development</li>
                                                <li className="list-group-item text-decoration-line-through"><i className="fa fa-check-square" aria-hidden="true"></i> Property ID Board	</li>
                                                <li className="list-group-item text-decoration-line-through"><i className="fa fa-check-square" aria-hidden="true"></i> Walk through of property to buyers</li>
                                                <li className="list-group-item text-decoration-line-through"><i className="fa fa-check-square" aria-hidden="true"></i> Market Valuation</li>
                                            </ul>
                                        </div>
                                        <button className="btn btn-light" type="button">Get Started for free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="plan-text">Standard</div>
                                        <div className="price">{pak?  1500 : 1500*5}<i className="fa fa-inr" aria-hidden="true"></i></div>
                                        <div className="price-details">Per/month. billed annually.</div>
                                        <div className="price-heading">List of Basic services provide for this price.</div>
                                        <div className="price-descp">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Personal visit to Property</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Site Cleaning</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Property Photographs </li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Video of Property</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Live Video Call</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Asset Development</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Property ID Board	</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Walk through of property to buyers</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Market Valuation</li>
                                            </ul>
                                        </div>
                                        <button className="btn btn-light" type="button">Get Started for free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="card bg-dark">
                                    <div className="card-body">
                                        <div className="plan-text">Premium</div>
                                        <div className="price">Custom</div>
                                        <div className="price-details">Per use/month. billed annually.</div>
                                        <div className="price-heading">List of Basic services provide for this price.</div>
                                        <div className="price-descp">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Personal visit to Property</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Site Cleaning</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Property Photographs </li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Video of Property</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Live Video Call</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Asset Development</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Property ID Board	</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Walk through of property to buyers</li>
                                                <li className="list-group-item"><i className="fa fa-check-square" aria-hidden="true"></i> Market Valuation</li>
                                            </ul>
                                        </div>
                                        <button className="btn btn-light" type="button">Get Started for free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="why-us pad-80">
                <div className="container">
                    <div className="intro-block">
                        <h2><span>Why choose us?</span></h2>
                        <p>Why SiteRakshak is the right choice for you.</p>
                    </div>
                    <div className="row m-0 why-list">
                        <div className="col-sm-12 col-md-6 col-lg-8 left-block p-0">
                            <div className="row m-0" style={{height:'100%'}}>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <div>
                                        <div className="icon"><i className="fa fa-shield" aria-hidden="true"></i></div>
                                        <h6>Gaurding your assets</h6>
                                        <p>Protecting your land, site, properties from being occupied by other individuals illegally. By getting timely update from time to time.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                                    <div>
                                        <div className="icon"><i className="fa fa-sign-language" aria-hidden="true"></i></div>
                                        <h6>Keep your assets tidy</h6>
                                        <p>
                                            Cleaning land, or land clearing, involves removing vegetation, obstacles, and debris to clean an area.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-12">
                                    <div>
                                        <div className="icon"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i></div>
                                        <h6>Install Barrier around</h6>
                                        <p>
                                            Fencing land serves various crucial purposes, from defining property boundaries to providing security and containing livestock.
                                        </p>
                                        <p>Fences deter trespassers, protect property from theft, and enhance overall security</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 right-block">
                            <div>
                                <div className="icon"><i className="fa fa-file-text" aria-hidden="true"></i></div>
                                <h6>Official Paaper, estimation, assistance</h6>
                                <p>
                                    Obtaining the necessary legal documents for land-related matters can be complex, as it varies significantly based on the specific purpose and location. However, we can provide you with general guidance and get them done on behalf.
                                </p>
                                <p>Always verify the authenticity of any land documents you obtain</p>
                                <p>Guidance to buy, sell or develpe by constructing building based on environment.</p>
                            </div>
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

export default Bannerblock;