import './Products.css'
import { useSelector } from 'react-redux'
import { ItemCard } from '../itemCard/ItemCard'


export const Products = () => {
    const items = useSelector(state => state.products)

    return(
        <div className="products">
            <div className="featured-heading">
                <span id='sp-fr-pd'>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span> 
                <strong>Newly</strong>Listed
                <span id='sp-fr-pd'>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span>
            </div>
            <div className="map-items">
                {
                    items.map(item => <ItemCard key={ item.id } data={ item }/>)
                }
                </div>
        </div>
    )
}