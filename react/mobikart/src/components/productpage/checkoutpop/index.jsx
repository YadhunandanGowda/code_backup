import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import "./style.scss";

function Checkoutpop(props) {
    const quantity = useSelector(state => state.quantity);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();
    function openPopup() {
        document.getElementById("customPopup").classList.add("show");
    }

    return (
        <div className="checkoutSection">
            <div className="checkInfo">
                <p>Qty : {quantity}</p>
                <p>Total : {total}</p>
            </div>
            <button className="checkoutBtn" onClick={() => { openPopup() }}>CHECKOUT</button>
        </div>
    )
}

// class Checkoutpop extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             quantity: this.props.quantity,
//             total: this.props.total
//         }
//         this.openPopup = this.openPopup.bind(this);
//     }


//     openPopup() {
//         document.getElementById("customPopup").classList.add("show");
//     }

//     render() {
//         return (
//             <div className="checkoutSection">
//                 <div className="checkInfo">
//                     <p>Qty : {this.props.quantity}</p>
//                     <p>Total : {this.props.total}</p>
//                 </div>
//                 <button className="checkoutBtn" onClick={() => { this.openPopup() }}>CHECKOUT</button>
//             </div>
//         )
//     }
// }

export default Checkoutpop;