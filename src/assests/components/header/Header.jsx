import './Header.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'

export const Header = () => {
    const cart = useSelector(state => state.cart)
    const wishlist = useSelector(state => state.wishlist)

    console.log(cart);
    return(
        <div className="header">
            <div className="offer-div">
                <p className="offer-text">Get 10% OFF in the Cart Section - <strong>Buy Now !</strong></p>
            </div>
            <div className="links-div">
                <Link to='/'>Home</Link>
                <Link to='/sell-your-item'>Sell</Link>
                <Link to='/my-wishlist' className='wishist-link'>Wishlist
                       {wishlist.length > 0 && <span className='wishlist-length'>{ wishlist.length }</span>}
                </Link>
                <Link to='/cart' className='cart-link'>Cart 
                { cart.length > 0 && <span className="cart-length">{ cart.length }</span>}
                </Link>
            </div>
        </div>
    )
}