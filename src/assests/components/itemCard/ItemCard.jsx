import './ItemCard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { BsSuitHeartFill } from 'react-icons/bs'
import one from '../../images/rndImgs/1.png'
import two from '../../images/rndImgs/2.jpg'
import three from '../../images/rndImgs/3.jpg'
import four from '../../images/rndImgs/4.jpg'
import five from '../../images/rndImgs/5.webp'
import six from '../../images/rndImgs/6.png'
import seven from '../../images/rndImgs/7.jpg'
import eight from '../../images/rndImgs/8.webp'
import ten from '../../images/rndImgs/10.jpg'

import { useState } from 'react'

export const ItemCard = ({ data }) => {
    const [buyQty, setBuyQty] = useState('')
    const [buySize, setBuySize] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    const sellerProfile = useSelector(state => state.seller)

    
    // TO RANDOMELY CHOOSING PRODUCT IMAGES

    var ranImg = undefined;
        if(data.pCategory=='mobiles , computers'){
            ranImg= one
        }
        if(data.pCategory=='tv , electronics'){
            ranImg= ten
        }
        if(data.pCategory=='men Clothing'){
            ranImg= eight
        }
        if(data.pCategory=='women Clothing'){
            ranImg= seven
        }
        if(data.pCategory=='beauty , health'){
            ranImg= five
        }
        if(data.pCategory=='Grocery'){
            ranImg= six
        }
        if(data.pCategory=='car, moterbikes'){
            ranImg= three
        }
        if(data.pCategory=='books'){
            ranImg= two
        }
        if(data.pCategory=='baby products , toys'){
            ranImg= four
        }

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
    var que  = [];
    for(let i=0;i<quen;i++){
        que.push(i+1)
    }
    
    

    return(
        <div className="item-card">
            <div className="img-div" onClick={() => {navigate('/product/'+ data.id )}}>
                <img src={ ranImg } alt=""/>
            </div>
            <div className="item-details">
                    <div className="items-center">
                            <div className="left" onClick={() => {navigate('/product/'+ data.id )}}>
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