import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
export  const Cart = () => {
    
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const [total, setTotal] = useState()
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc+ Number(curr.pPrice)
        // *curr.pQuantity
        ,0))
    },[cart])

    const removeItem = (id) => {
        dispatch({
            type:"REMOVE_FROM_CART",
            padyload:id
        })
        console.log(id);
    }

    return(
        <div className="cart">
            {cart.map(item =><div key={item.id} className='cart-item-map'> <p className="product-n">{ item.pTitle }</p>
                        <p className="product-n">{ item.pPrice }</p>
                        <p className="product-n">{ item.pDescription }</p>
                    {/* <button onClick={() => removeItem( item.data.id )}>Remove</button> */}
                    <button onClick={() => removeItem( item.id )}>Remove 2</button></div>
                    )}
            <div className="total-div">
                <p>Cart Length : ({ cart.length }) {total}</p>
            </div>
        </div>
    )
}