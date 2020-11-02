import React from 'react';
import buythecover from '../images/bythecover1.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
          <img src={buythecover} width="250" height="150" id="logo" className="d-inline-block align-top" alt="" loading="lazy" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Grader |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/polls">Polls |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/artistspotlight">Artist Spotlight |</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link" href="/writerspotlight">Writer Spotlight |</a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="/store">Store</a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>        
        </div>
    );
};

export default Navbar;