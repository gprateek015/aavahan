import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to=""><span id="college">Aava</span><span id="help">Han</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" id='blue' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink  className="nav-link" aria-current="page" to="/" id='home'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  className="nav-link" to="/about" id='about'>About</NavLink>
                    </li>
                    
        
                    <li className="nav-item">
                        <NavLink  className="nav-link" to="/contact" id='contact'>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  className="nav-link" to="/Teams" id='contact'>Teams</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  className="nav-link" to="/Sponsorships" id='contact'>Sponsorships</NavLink>
                    </li>
                </ul>


            </div>
        </div>
    </nav>
</>
  )
}

export default Navbar