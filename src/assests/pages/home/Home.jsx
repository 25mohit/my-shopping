import { FeaturedProduct } from '../../components/featuredProducts/FeaturedProducts'
import { Products } from '../../components/products/Products'
import './Home.css'

export const Home = () => {

    return(
        <div className="home">
            <Products />
            <FeaturedProduct />
        </div>
    )
}