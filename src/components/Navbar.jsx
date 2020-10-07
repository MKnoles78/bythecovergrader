import React from 'react';
import buythecover from '../images/buythecover.png'

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={buythecover} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
            Buy the Cover
          </a>
        </nav>
        </div>
    );
};

export default Navbar;