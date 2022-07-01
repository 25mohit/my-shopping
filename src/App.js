import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Home } from './assests/pages/home/Home';
import { Vendor } from './assests/pages/vendor/Vendor';
import { Header } from './assests/components/header/Header';
import { Wishlist } from './assests/pages/wishlist/Wishlist'
import { Cart } from './assests/pages/cart/Cart'
import { Sidebar } from './assests/components/sidebar/Sidebar';
import { ProductPage } from './assests/pages/productPage/ProductPage';
import { Seller } from './assests/pages/seller/Seller';

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
      <div className='main'>
      <div className='side'>
          <Sidebar />
      </div>
      <div className='other'>
            <Routes>
                <Route path='/' exact element={<Home />}/>
                <Route path='my-wishlist' exact element={<Wishlist />}/>
                <Route path='cart' exact element={<Cart />} />
                <Route path='/product/:id' exact element={<ProductPage />} />
                <Route path='/sell-your-item' exact element={<Vendor />}/>
                <Route path='/seller-profile' exact element={<Seller />} />
            </Routes>
      </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
