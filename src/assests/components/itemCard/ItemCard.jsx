import './ItemCard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { BsSuitHeartFill } from 'react-icons/bs'
import shoe from '../../../assests/images/products/shoe.png'

export const ItemCard = ({ data }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)

    const addToCart = () => {
        dispatch({
            type:"ADD_TO_CART",
            payload: data
        })
    }
    const addToWidhlist = () => {
        dispatch({
            type:"ADD_TO_WISHLIST",
            payload: data
        })
    }
    const removeFromCart = (id) => {
            dispatch({
                type:"REMOVE_FROM_CART",
                payload:id
            })
    }
    return(
        <div className="item-card">
            <div className="img-div">
                <img src={ shoe } alt="" />
            </div>
            <div className="item-details">
                <div className="left">
                        <p className="item-name" onClick={() => {navigate('/product/'+ data.id )}}>{ data.pTitle }</p>
                        <p className="seller-name">Solde By: mohit247</p>
                        {/* <p className="item-decription">{ data.pDescription }</p> */}
                        <p className="item-price" onClick={() => {navigate('/product/'+ data.id )}}>₹ { data.pPrice }</p>
                        <select>
                            {
                                data.pSizes.map((size, i) => <option key={ i }>{ size }</option>)
                            }
                        </select><br />
                </div>
                <div className="right">
                            <BsSuitHeartFill id='heart-icon' onClick={ addToWidhlist }/>
                </div>
            </div>
            <div className="item-card-footer">
                {
                    cart.some(p => p.id===data.id)?(
                        <button id='remove-cart-bt' onClick={ () =>removeFromCart(data.id) }>Remove</button>
                    ):(
                        <button onClick={ addToCart } id='add-cart-bt'>Cart</button>
                    )
                }
            </div>
        </div>
    )
}