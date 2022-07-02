import { FeaturedProduct } from '../../components/featuredProducts/FeaturedProducts'
import { Products } from '../../components/products/Products'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './Home.css'

export const Home = () => {
    const products = useSelector(state => state.products)

    return(
        <div className="home">
           {products.length>0 && <Products />}
            <FeaturedProduct />
        </div>
    )
}