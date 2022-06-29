import { useSelector } from 'react-redux'
import './Cart.css'

export  const Cart = () => {
    const cart = useSelector(state => state.cart)
    return(
        <div className="cart">
            {
                cart.map(item => <div>
                    { item.pTitle }
                    { item.pPrice }
                    { item.pDescription }
                    </div>)
            }
        </div>
    )
}