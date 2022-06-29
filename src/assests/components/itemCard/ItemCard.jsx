import './ItemCard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { BsSuitHeartFill } from 'react-icons/bs'
import shoe from '../../../assests/images/products/shoe.png'

export const ItemCard = ({ data }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addToCart = (id) => {
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
    return(
        <div className="item-card">
            <div className="img-div">
                <img src={ shoe } alt="" />
            </div>
            <div className="item-details" onClick={() => {navigate('/product/'+ data.id )}}>
                <div className="left">
                        <p className="item-name">{ data.pTitle }</p>
                        <p className="seller-name">Solde By: mohit247</p>
                        {/* <p className="item-decription">{ data.pDescription }</p> */}
                        <p className="item-price">₹ { data.pPrice }</p>
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
                    <button onClick={ addToCart } id='add-cart-bt'>Cart</button>
            </div>
        </div>
    )
}