import {BUY_ICECREAM,SELL_ICECREAM} from "./icecreamType";

const initialState = {
    numberOfIcecreams : 5
}

const icecreamReducer = (state = initialState, aciton)=> {
    switch (aciton.type) {
        case BUY_ICECREAM : {
            return {
                ...state,
                numberOfIcecreams : state.numberOfIcecreams +1
            }
        }
        case SELL_ICECREAM : {
            return {
                ...state,
                numberOfIcecreams : state.numberOfIcecreams -1
            }
        }
        default: return state
    }
}

export default icecreamReducer;