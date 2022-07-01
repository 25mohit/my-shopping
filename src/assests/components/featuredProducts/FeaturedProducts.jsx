import { ItemCard } from '../itemCard/ItemCard'
import './FeaturedProducts.css'

export const FeaturedProduct = () => {
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
                    <div className="dummy-item-div">
                            hello
                    </div>
                </div>
        </div>
    )
}