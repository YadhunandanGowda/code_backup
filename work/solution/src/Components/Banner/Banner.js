import React, { Component } from 'react';
import Slider from "react-slick";
import {Link} from "@reach/router";
import Button from '@material-ui/core/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Banner.css';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
    }

    componentDidMount(){
       document.getElementsByClassName("banner-sec")[0].style.height = (window.innerHeight - 170) + "px";
    }
    
    render() {
        return (
            <div className="banner-sec">
              <div  className="bannerHeading">
              <h1>Standard Engineering</h1>
              <p>Motors | Genetators | Pumps | PPE Products</p>
              </div>
              </div>
            );
    }
}

export default Banner;