import './FeaturedProducts.css'
import { moc_produ } from '../../mocProducts/MOC_PROD'
import { DummyProd } from '../dummyProd/DummyProd'

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
                    {
                        moc_produ.map(item => <DummyProd key={item.id} data={ item } />)
                    }
                </div>
        </div>
    )
}