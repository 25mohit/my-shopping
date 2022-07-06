import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Cart.css'
export  const Cart = () => {
    
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

        var exGST =(cart.reduce((acc, curr) => acc+ Number(curr.pPrice),0))
        var gst = Math.round(exGST*18/100)
        var total = exGST+gst

    const deleteIt = (id) => {
        console.log(id)
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:id
        })
    }
    const clearAll = () => {
        dispatch({
            type:"CLEAR_CART"
        })
        dispatch({
            type:"CLEAR_WISHLIST"
        })
        navigate('/')
    }

    return(
        <div className="cart">
              {cart.length>0 ?
         
            cart.map(item => <div className='cart-item-map'>
                <div className="left-side">
                    <p className="cart-item-name"> {item.pTitle}</p>
                    <p className="item-desc">{item.pDescription}</p> 
                    <p className="item-price">₹ {item.pPrice}</p> 
                    {console.log(item.pPrice)}
                    <p className="item-qty">{item.pQty}
                    {console.log(item.pQty)}</p> 
                </div>
                <div className="right-side">
                        <button onClick={() =>{deleteIt(item.id)}} id='remove-bt'>Remove</button></div>
                </div>)
         : <h1 id='empty-txt'>Cart is empty... Start adding Products into the Cart ..!</h1>}
         {cart.length>0 &&
            <div className="total-div">
                <p id='cart-total-txt'>Cart Length : ({ cart.length }) ₹ <strong>{exGST}</strong></p>
                <p id='cart-total-txt'>GST 18% : ₹ { gst }</p>
                <p className="total-value">Total Price : ₹ {total}</p>
                <div className="cart-footer-bt">
                        <button id='clear-all-bt' onClick={ clearAll }>Clear All</button>
                        <button className="checkout-bt">Checkout</button>
                </div>
            </div>}
        </div>
)
    }

    