import { createStore } from "redux";

const initialState = {
    products:[],
    cart:[],
    wishlist:[],
    seller:'',
    deleteProducts:[]
    // byStock:false,
    // searchQuery:'',
    // sort:true
}
const reducer = (state= initialState, action) => {
    switch(action.type){
        case "SELL_PRODUCT":
            return{
                ...state,
                products:[...state.products, action.payload]
            }
        case "DELETE_PRODUCT":
            return{
                ...state,
                products:state.products.filter(product => product.id !== action.payload),
                cart:state.cart.filter(item => item.id !== action.payload)
            }
        case "ADD_TO_DELETED_PRODUCTS":
            return{
                ...state,
                deleteProducts:[...state.deleteProducts, action.payload]
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
        case "REMOVE_FROM_CART":
            return{
                ...state,
                cart:state.cart.filter(item => item.id !== action.payload)
            }
        case "CLEAR_CART":
            return{
                ...state,
                cart:[]
            }
        case "SELLER_PROFILE":
        return{
            ...state,
            seller:action.payload
        }
        // case "CHANGE_CART_QTY":
        //     return{
        //         ...state,
        //         cart:state.cart.filter(c => c.id===action.payload.id?c.qty=action.payload.qty:c.qty)
        //     }
        // case "SORT_BY_PRICE":
        //     return{
        //         ...state,
        //         sort:action.payload
        //     }
        // case "FILTER_BY_STOCK":
        //     return{
        //         ...state,
        //         byStock:!state.byStock
        //     }
        // case "FILTER_BY_SEARCH":
        //     return{
        //         ...state,
        //         searchQuery:action.payload
        //     }
        // case "CLEAR_FILTER":
        //     return{
        //         byStock:false,
        //         searchQuery:''
        //     }
            default:
                return state;
    }
}
export default createStore(reducer)