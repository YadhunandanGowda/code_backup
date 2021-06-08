import React from 'react';
import {buyCake,sellCake} from '../redux';
import {useSelector,useDispatch} from 'react-redux';

function HooksCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of Cakes - {numberOfCakes}</h1>
            <button onClick={()=> dispatch(buyCake())}>buy cakes</button>
            <button onClick={()=> dispatch(sellCake())}>sell cakes</button>
        </div>
    )
}

export default HooksCakeContainer;