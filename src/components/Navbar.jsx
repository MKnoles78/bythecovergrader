import React from 'react';
import buythecover from '../images/buythecover.png'

const Navbar = () => {
    return (
        <div>
        {/* <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={buythecover} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            Buy the Cover
          </a>
        </nav> */}        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/" id="logo">Comics by the Cover</a>
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
                <a className="nav-link" href="/portfolio">Polls |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Artist Spotlight</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>        
        </div>
    );
};

export default Navbar;