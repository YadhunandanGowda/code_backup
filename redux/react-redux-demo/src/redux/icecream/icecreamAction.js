import {BUY_ICECREAM,SELL_ICECREAM} from './icecreamType';

export const buyIcecream = () => {
    return {
        type: BUY_ICECREAM
    }
}

export const sellIcecream = () => {
    return {
        type: SELL_ICECREAM
    }
}