import React , {useState} from 'react';
import { withRouter} from 'react-router';
import './style.scss';

import ProductThumbNail from './productthumbnail/index';
import Checkoutpop from "./checkoutpop/index";
import Custompopup from './custompopup/index';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {quantity:0, total: 0};
        this.productQuantity = this.productQuantity.bind(this);
    }

    componentDidMount() {
            this.setState((prev)=>({catagoryname: this.props.match.params.id}),()=>{console.log("done")});

            document.addEventListener("mouseup", e => {
                let container = document.getElementById("customPopup");
                if(document.getElementById("customPopup")){
                if((container == e.target) && document.getElementById("customPopup").getAttribute("class").includes("show") ) {
                document.getElementById("customPopup").classList.remove("show");
                }
                }})
    }

    productQuantity(count, price){
        this.setState((prev)=>({quantity: prev.quantity +(count), total: prev.total +(count * price)}))
    }


    render() {
        return(
                <section>
                    <h2 className="SectionTitle" id="some">{(this.state.catagoryname)? 
                    (this.state.catagoryname.toUpperCase()):(this.state.catagoryname)} :</h2>
                    <div className="productionSection">
                        <ProductThumbNail catagory={this.state.catagoryname} productQuantity={this.productQuantity}/>
                    </div>
                    <Checkoutpop quantity={this.state.quantity} total={this.state.total}/>
                    <Custompopup totalPrice={this.state.total}/>
                </section>
        )
    }
}

export default withRouter(Product);