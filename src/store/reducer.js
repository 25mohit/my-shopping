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
        case "CLEAR_ALL_DELETED_ITEMS":
            return{
                ...state,
                deleteProducts:[]
            }
        case "SELLER_PROFILE":
        return{
            ...state,
            seller:action.payload
        }
        case "EDIT_LISTED_PRODUCT":
           const findProductIndex = state.products.findIndex(product => product.id ==action.payload.id)
           if(findProductIndex>=0){
            state.products[findProductIndex].pTitle = action.payload.pTitle
            state.products[findProductIndex].pCategory = action.payload.pCategory
            state.products[findProductIndex].pSizes = action.payload.pSizes
            state.products[findProductIndex].pPrice = action.payload.pPrice
            state.products[findProductIndex].pQty = action.payload.pQty
            state.products[findProductIndex].pDescription = action.payload.pDescription
           }
            default:
                return state;
    }
}
export default createStore(reducer)