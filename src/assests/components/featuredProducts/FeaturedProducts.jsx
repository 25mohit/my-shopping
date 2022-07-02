import './FeaturedProducts.css'
import { moc_produ } from '../../mocProducts/MOC_PROD'
import { DummyProd } from '../dummyProd/DummyProd'

export const FeaturedProduct = () => {
    
    return(
        <div className="featured-products">
                <div className="featured-header">
                    <div className="featured-heading">
                        <span id='sp-fr-pd'>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span> 
                        <strong>Featured</strong>Products 
                        <span id='sp-fr-pd'>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></div>
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