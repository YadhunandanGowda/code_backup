import React , {Component}from 'react';
import { useParams} from "react-router";
import {machines} from '../../json/data';

import "./product.css";

function Products(props){
    let {id} = useParams();

    setTimeout(() => {
        let show = props.routeName;
    if(show =="notProd"){
        document.getElementsByClassName("prodRedirect")[0].style.display = "none";
    }else {
        document.getElementsByClassName("prodRedirect")[0].style.display = "inline";
    }
    }, 100);
    return(
        <div>
            <h1 className="prodTitle">{machines.ProdPage[id].title}</h1>
        </div>
    )
}

export default Products;