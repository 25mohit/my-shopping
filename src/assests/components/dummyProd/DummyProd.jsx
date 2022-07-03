import './DummyProd.css'
import { useDispatch } from 'react-redux/es/exports'

export const DummyProd = ({data}) => {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch({
            type:"ADD_TO_CART",
            payload: data
        })
    }

    return( 
        <div className="dummy-ptoducts">
                 <img src={data.prodImg} alt="" />
                            <div className="prod-info">
                            <p className="prod-ti">{data.pTitle}</p>
                            <p className="prod-de">{data.pDescription}</p>
                            <p className="prod-pri">₹ {data.pPrice}</p>
                            <div className="item-foot">
                                    <select name="" id="item-se">
                                    {data.pSizes.map((size,i)=><option key={i} value={size}>{size}</option>)}
                                    </select>
                                        <button id='cart-bt' onClick={ addToCart }>CART</button>
                            </div>
                            </div>
        </div>
    )
}