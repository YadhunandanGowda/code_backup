import { inc_Product_Quantity, dec_product_Quantity } from './type'


export const incProductQuantity = (price) => {
    return {
        type: inc_Product_Quantity,
        price: price
    }
}

export const decProductQuantity = (price) => {
    return {
        type: dec_product_Quantity,
        price: price
    }
}