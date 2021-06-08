import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRupeeSign} from '@fortawesome/free-solid-svg-icons';

import Wishlist from './wishlist/index';
import Addcartquantity from './addcartquantity/index';
import "./style.scss"

class ProductThumbNail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded : false , quantity: 0}
        this.productQuantity = this.productQuantity.bind(this);
    }

    componentDidMount(){
        
            fetch("/json/product.json")
            .then(res=> {
                return res.json()
            })
            .then((result)=> {
                this.setState((prev)=>(
                    {product:result[this.props.catagory], loaded : true }),
                    ()=>{console.log(this.state.product)
                });
            })   

    }

    productQuantity(count, price){
        this.props.productQuantity(count, price)
    }

    render() {
        return (
            <React.Fragment>
                {this.state.loaded?(
                    this.state.product.map((item)=>{
                        return (
                            <div className="productChild">
                                <Wishlist/>
                                <div className="prodImg">
                                    <img src={item.productImage} alt="temp" />
                                </div>
                                <div className="prodInfo">
                                    <div className="prodName">
                                        <p className="prodbrand">{item.prodNameInfo.brand}</p>
                                        <p className="prodDesc">{item.prodNameInfo.productName}</p>
                                    </div>
                                    <div className="prodPrice">
                                        <p className="final"><i><FontAwesomeIcon icon={faRupeeSign}/></i>{item.prodPriceInfo.productSellingPrice}</p>
                                        <p className="real"><i><FontAwesomeIcon icon={faRupeeSign}/></i>{item.prodPriceInfo.productOriginalPrice}</p>
                                        <p className="discount">{item.prodPriceInfo.productDiscount}off</p>
                                    </div>
                                    <Addcartquantity productQuantity={this.productQuantity} price={item.prodPriceInfo.productSellingPrice}/>
                                </div>
                            </div>
                        )
                    })
                ):(
                    <div className="loading">
                        <p>Loading...</p>
                    </div>)}
            </React.Fragment>
        )
    }
}

export default ProductThumbNail;