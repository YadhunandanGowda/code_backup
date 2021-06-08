import React, { useState } from 'react';
import { incProductQuantity, decProductQuantity } from '../../../../redux';
import { useDispatch } from 'react-redux';

import './style.scss';


function Addcartquantity(props) {
    const price = props.price;
    const [quantity, setQuantity] = useState(0);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     setPrice(props.price);
    // }, [])

    const productQuantity = (e) => {
        if ((e.target.className).includes("add")) {
            setQuantity(quantity + 1);
            dispatch(incProductQuantity(+price));
        } else {
            if (!(quantity == 0)) {
                setQuantity(quantity - 1);
                dispatch(decProductQuantity(+price));
            }
        }
    }

    const addToCart = (e) => {
        console.log(price);
        if ((e.target.className).includes("added")) {
            e.target.classList.remove("added");
            e.target.innerText = "+ Cart";
        } else {
            e.target.classList.add("added");
            e.target.innerText = "- Cart";
        }
    }

    return (
        <div className="prodAddCart">
            <button className="prodCartBtn" onClick={(e) => { addToCart(e) }}>+ Cart</button>
            <div className="prodQuantity">
                <i className="add" onClick={(e) => { productQuantity(e) }}>+</i>
                <p className="qtyNum">{quantity}</p>
                <i className="subt" onClick={(e) => { productQuantity(e) }}>-</i>
            </div>
        </div>
    )
}


// class Addcartquantity extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {loaded : false , quantity: 0, price:0};
//         this.productQuantity = this.productQuantity.bind(this);  
//         this.addToCart = this.addToCart.bind(this);
//     }

//     componentDidMount() {
//         this.setState({price: this.props.price});
//     }

//     productQuantity (e){
//         if((e.target.className).includes("add")){
//             this.setState((prevState)=>({quantity: (prevState.quantity+1)}))
//             this.props.productQuantity(+1, this.state.price)
//         }else {
//             if(!(this.state.quantity == 0)){
//                 this.setState((prevState)=>({quantity: (prevState.quantity-1)}))
//                 this.props.productQuantity(-1 , this.state.price)
//             }
//         }
//     }

//     addToCart(e){
//         console.log(e)
//         if((e.target.className).includes("added")){
//             e.target.classList.remove("added");
//             e.target.innerText = "+ Cart";
//         }else {
//                 e.target.classList.add("added");
//                 e.target.innerText = "- Cart";
//         }
//     }

//     render() {
//         return (
//             <div className="prodAddCart">
//                 <button className="prodCartBtn" onClick={(e)=>{this.addToCart(e)}}>+ Cart</button> 
//                 <div className="prodQuantity">
//                     <i className="add"  onClick={(e)=>{this.productQuantity(e)}}>+</i>
//                     <p className="qtyNum">{this.state.quantity}</p>
//                     <i className="subt" onClick={(e)=>{this.productQuantity(e)}}>-</i>
//                 </div>
//             </div>
//         )
//     }
// }

export default Addcartquantity;