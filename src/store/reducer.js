import { createStore } from "redux";

const initialState = {
    products:[],
    cart:[],
    wishlist:[]
}
const reducer = (state= initialState, action) => {
    switch(action.type){
        case "SELL_PRODUCT":
            return{
                ...state,
                products:[...state.products, action.payload]
            }
        case "ADD_TO_CART":
            return{
                ...state,
                cart:[...state.cart, action.payload]
            }
        case "ADD_TO_WISHLIST":
            return{
                ...state,
                wishlist:[...state.wishlist, action.payload]
            }
            default:
                return state;
    }
}
export default createStore(reducer)