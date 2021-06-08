import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

import './style.scss';

 class Wishlist extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             wishlist: false
         }
     }
     
    render() {
        return (
            <div className={"wishlistHeart"+(this.state.wishlist? " heart": "")} onClick={(e)=>{this.setState((prev)=>({wishlist: !(prev.wishlist)}), ()=>{console.log(this.state)})}}>
                <i ><FontAwesomeIcon icon={faHeart}/></i>
            </div>
        )
    }
}

export default Wishlist;
