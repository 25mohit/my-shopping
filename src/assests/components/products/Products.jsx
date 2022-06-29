import './Products.css'
import { useSelector } from 'react-redux'
import { ItemCard } from '../itemCard/ItemCard'


export const Products = () => {
    const items = useSelector(state => state.products)

    return(
        <div className="products">
            <div className="product-container">

                {
                    items.map(item => <ItemCard key={ item.id } data={ item }/>)
                }
                </div>
        </div>
    )
}