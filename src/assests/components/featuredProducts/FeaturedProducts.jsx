import { ItemCard } from '../itemCard/ItemCard'
import './FeaturedProducts.css'
import { moc_produ } from '../../mocProducts/MOC_PROD'
import { useSelector } from 'react-redux'

export const FeaturedProduct = () => {
    const cart = useSelector(state => state.cart)

    return(
        <div className="featured-products">
                <div className="featured-header">
                    <h className="featured-heading">
                        <span>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span>
                        <strong>Featured</strong>Products
                        <span>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></h>
                    <p className="f-head">Amazing products added recently in our catlog</p>
                </div>
                <div className="featured-pro-card">
                    {
                        moc_produ.map(item => <div key={item.id} id="dummy-item-div">
                                <img src={item.prodImg} alt="" />
                            <div className="prod-info">
                            <p className="prod-ti">{item.prodTittle}</p>
                            <p className="prod-de">{item.prodDesc}</p>
                            <p className="prod-pri">₹ {item.prodPric}</p>
                            <div className="item-foot">
                                    <select name="" id="item-se">
                                    {item.prodSize.map((size,i)=><option key={i} value={size}>{size}</option>)}
                                    </select>
                                        <button id='cart-bt'>CART</button>
                            </div>
                            </div>
                        </div>)
                    }
                </div>
        </div>
    )
}