import './ItemCard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { BsSuitHeartFill } from 'react-icons/bs'
import shoe from '../../../assests/images/products/shoe.png'
import { useState } from 'react'

export const ItemCard = ({ data }) => {
    const [buyQty, setBuyQty] = useState('')
    const [buySize, setBuySize] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const sellerProfile = useSelector(state => state.seller)

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

    var quen = data.pQty;
    console.log(typeof(quen));
    console.log(quen);
    var que  = [];
    for(let i=0;i<quen;i++){
        que.push(i+1)
    }
    console.log(que);

    return(
        <div className="item-card">
            <div className="img-div">
                <img src={ shoe } alt="" />
            </div>
            <div className="item-details">
                    <div className="items-center"  onClick={() => {navigate('/product/'+ data.id )}}>
                            <div className="left">
                                    <p className="item-name">{ data.pTitle }</p>
                                    {sellerProfile && <p className="seller-name">Solde By: { sellerProfile.sName }</p>}
                                    <p className="item-decription">{ data.pDescription }</p>
                                    <p className="item-price">₹ { data.pPrice }</p>
                            </div>
                            <div className="right">
                                        <BsSuitHeartFill id='heart-icon' onClick={ addToWidhlist }/>
                            </div>
                    </div>
                <div className="items-select-menu">
                        <select  name="" id="" value={buyQty} onChange={e=> setBuyQty(e.target.value)}>
                            <option value='' disabled>Quentity</option>
                            {que.map(qty => <option key={ qty } value={qty}>{ qty }</option>)}
                            {console.log(que)}
                        </select>
                            {data.pSizes.length>0 && <select  value={ buySize } onChange={e=> setBuySize(e.target.value)}>
                                <option value='' disabled>Sizes</option>
                                {
                                    data.pSizes.map((size, i) => <option key={ i }>{ size }</option>)
                                }
                            </select>}
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