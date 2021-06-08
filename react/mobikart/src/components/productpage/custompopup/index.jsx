import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes,faRupeeSign} from '@fortawesome/free-solid-svg-icons';

import './style.scss';

class Custompopup extends React.Component {
    constructor(props) {
        super(props);
        this.closePopup = this.closePopup.bind(this);
    }
    

    closePopup (){
        document.getElementById("customPopup").classList.remove("show")
        // document.querySelectorAll(".customPopup")[0].classList.remove("show");
    }

    render() {
        return (
            <div className="customPopup" id="customPopup">
            <div className="popupContainer">
                <div className="exitBtn"  onClick={()=>{this.closePopup()}}><i><FontAwesomeIcon icon={faTimes}/></i></div>
                <div className="popMessageBox">
                    <div className="messageContent" id="message">
                        <h4>Proceed to checkout?</h4>
                        <p className="ttlPr">Total Price : <b><i><FontAwesomeIcon icon={faRupeeSign}/></i> {this.props.totalPrice}/-</b></p>
                    </div>
                    <button className="popupOkBtn" onClick={()=>{this.closePopup()}}>Confirm</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Custompopup;