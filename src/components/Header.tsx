import { BrowserRouter, NavLink } from "react-router-dom";

function Header() {

    return (<BrowserRouter>
        <nav className="header navbar navbar-expand-lg navbar-light bg-white p-4">
            <div className="container">
                <a className="navbar-brand" href="#"><span>S</span>ite <span>R</span>akshak</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="flex-grow-1 navbar-nav mb-2 mb-lg-0  justify-content-center">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href={`/`}>Home</a> */}
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`/service`}>Services</a>
                            {/* <NavLink to='/service' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}>Services</NavLink> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`/documentation`}>Documentation</a>
                            {/* <NavLink to='/Docs' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}>Docmentation</NavLink> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`/about-us`}>About US</a>
                            {/* <NavLink to='/about-us' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}>About</NavLink> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={`/contact`}>Contact</a>
                            {/* <NavLink to='/contact' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')}>Contact</NavLink> */}
                        </li>
                    </ul>
                    <form className="d-flex">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button className="btn btn-dark" type="submit">Login</button>
                    </form> 
                </div>
            </div>
        </nav></BrowserRouter>
    )
}

export default Header;