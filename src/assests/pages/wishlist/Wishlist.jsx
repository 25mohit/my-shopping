import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Wishlist.css'

export const Wishlist = () => {

const wishlist = useSelector(state => state.wishlist)
const dispatch = useDispatch()

const addToCart = (data) => {
    dispatch({
        type:"ADD_TO_CART",
        payload: data
    })
}

const clearWish = () => { 
    dispatch({ 
        type:"CLEAR_WISHLIST"
    })
}

const removeItem = (id) => {
    dispatch({
        type:"REMOVE_FROM_WISHLIST",
        payload:id
    })
    console.log(id);
}
    return(
        <div className="wishlist">
        { wishlist.length>0 ?
        <>
            <div className="wish-heading">
                <h1 className="wish-head">Wishlists</h1>
                <button className="clear-wish" onClick={ clearWish }>Clear All</button>
            </div>
            <div id='wish-map'>{ wishlist.map(wish => 
                <div id='wish-card' key={wish.id }>
                    <img src={ wish.ranImg } alt="" id='wish-img'/>
                    <p id='wish-title'>{ wish.data.pTitle }</p>
                    <p id='wish-des'>{ wish.data.pDescription }</p>
                    <label htmlFor="qty" id='wish-qty'>Quantity</label>
                    <input type="text" value={wish.data.pQty} name='qty' id='qty-input-field' disabled/>
                    <p id='wish-price'>₹ { wish.data.pPrice }</p>
                    <div className="wish-btns-div">
                        <button className="wish-addto-cart" onClick={() =>addToCart(wish.data)}>Add to Cart</button>
                        <button className="wish-clear" onClick={ () => removeItem(wish.id) }>Clear</button>
                    </div>
                </div>
            ) }</div></>: <h1 id='empty-txt'>Wishist is empty... Start adding Products into the Wishlist ..!</h1>}
        </div>
    )
}
