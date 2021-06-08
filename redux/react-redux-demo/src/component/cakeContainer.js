import React from 'react';
import {buyCake,sellCake} from '../redux';
import {connect} from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h1>Number of Cakes - {props.numberOfCakes}</h1>
            <button onClick={props.buyCake}>buy cakes</button>
            <button onClick={props.sellCake}>sell cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : ()=>dispatch(buyCake()),
        sellCake : ()=>dispatch(sellCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);
