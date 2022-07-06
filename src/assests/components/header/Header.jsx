import './Header.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link, useNavigate } from 'react-router-dom'
import { Nav, Badge, Dropdown } from 'react-bootstrap'
import {BsCartCheckFill} from 'react-icons/bs'
import {BsTrash} from 'react-icons/bs'
import {GoThreeBars} from 'react-icons/go'
import { useDispatch } from 'react-redux'

export const Header = ({setToogleSidebar, toogleSidebar}) => {
    
    const cart = useSelector(state => state.cart)
    const wishlist = useSelector(state => state.wishlist)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const removeFromDropDown = (id) => {
        dispatch({
            type:'REMOVE_FROM_CART',
            payload:id
        })
    }
    
    const clearCart = () => {
        dispatch({
            type:'CLEAR_CART',
        })
    }
    return(
        <div className="header">
            <div className="offer-div">
                <p className="offer-text">Get 10% OFF in the Cart Section - <strong>Buy Now !</strong></p>
                <GoThreeBars id='bar-ico' onClick={()=>setToogleSidebar(toogleSidebar == 'show' ? 'hide' : 'show')}/>
            </div>
            <div className="links-div">
                <Link to='/'>Home</Link>
                <Link to='/sell-your-item'>Sell</Link>
                <Link to='/my-wishlist' className='wishist-link'>Wishlist
                       {wishlist.length > 0 && <span className='wishlist-length'>{ wishlist.length }</span>}
                </Link>
                {/* <Link to='/cart' className='cart-link'>Cart 
                { cart.length > 0 && <span className="cart-length">{ cart.length }</span>}
                </Link> */}
                <Nav id='dropdown-cart'>
                    <Dropdown >
                        <Dropdown.Toggle variant="success">
                            <BsCartCheckFill color='white' fontSize="25px" />
                            <Badge color='red'>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth:370}} id='menu-items'>
                            {cart.length>0 ?(
                                <>
                                {cart.map(item => <div id='map-div' key={item.id}>
                                   <p id='m-name'>{item.pTitle}</p> 
                                   <div className="footer-div-map">
                                        <p id='m-price'>Rs {item.pPrice}</p> 
                                        <p id='m-bt'><BsTrash onClick={ () => removeFromDropDown(item.id) }/></p>
                                   </div>
                                    </div>)}
                                </>
                            ) : (<span style={{ padding:10}}>Cart is Empty!</span>)}
                            
                    <div className="drop-footer">
                        <button id='to-cart' onClick={() =>navigate('cart')}>To Cart</button>
                        <button id='clear-cart' onClick={ clearCart }>Clear Cart</button>
                    </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </div>
        </div>
    )
}