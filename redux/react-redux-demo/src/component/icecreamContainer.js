import React from 'react';
import {buyIcecream, sellIcecream} from '../redux';
import {useSelector,useDispatch} from 'react-redux';

function IcecreamContainer() {
    const numberOfIcecreams = useSelector(state => state.icecream.numberOfIcecreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number of Icecream - {numberOfIcecreams}</h1>
            <button onClick={()=> dispatch(buyIcecream())}>buy Icecream</button>
            <button onClick={()=> dispatch(sellIcecream())}>sell Icecream</button>
        </div>
    )
}

export default IcecreamContainer;