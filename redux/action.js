import { ADD_TO_CART,REMOVE_TO_CART } from "./constant"

export function addcart(itm){
    return{
        type:ADD_TO_CART,
        data:itm
    }
}

export function removecart(itm){
    return{
        type:REMOVE_TO_CART,
        data:itm
    }
}