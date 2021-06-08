import React, { Component } from 'react';
import {Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    
    scrolltotop ($this){
        window.scrollTo({top: document.getElementById("products").offsetTop - 120, behavior: 'smooth' });
    }

    render() {
        return (
            <header>
                <div className="logo-sec">
                    <Link to="/">
                    <img src="/solution/assets/se-logo.svg" className="logo-img" alt="company logo"/>
                    {/* <Logo className="companyLogo"/> */}
                    </Link>
                </div>
                <div className="navbar">
                    <ul className="menu-list">
                        <li>
                        <a className="lst-elmnt prodRedirect" href="javascript:void(0)" onClick={this.scrolltotop.bind(this)}>Products</a>
                        </li>
                        <li>
                        <Link className="lst-elmnt" to="/about">About us</Link>
                        </li>
                        <li>
                        <Link className="lst-elmnt" to="/contact">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header; 