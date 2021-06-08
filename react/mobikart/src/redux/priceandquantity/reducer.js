import { inc_Product_Quantity, dec_product_Quantity } from './type'

const initialState = {
    quantity: 0,
    total: 0
}

const pQReducer = (state = initialState, action) => {
    switch (action.type) {
        case inc_Product_Quantity: {
            console.log(action.price)
            return {
                ...state,
                quantity: state.quantity + 1,
                total: state.total + action.price,
            }
        }
        case dec_product_Quantity: {
            console.log(action.price)
            return {
                ...state,
                quantity: state.quantity - 1,
                total: state.total - action.price,
            }
        }
        default: { return state }
    }
}

export default pQReducer;