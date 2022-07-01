import './Sidebar.css'
import {sidebarData} from '../../../assests/sidebarData/Data'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    const products = useSelector(state => state.products)
    const combined = () => {
        return[...new Set(products.map(item => item.pCategory))]
    }
    
    return(
        <div className="sidebar">
            <div className="logo">
                    <h1>PORTO</h1>
            </div>
            <div className="main-title">Home</div>
            {
               sidebarData.map(sidebar => <div className='sidebar-items'>
                <Link to={ sidebar.link }>{ sidebar.name }</Link>
                </div>)
            }
            <p className="category">Category</p>
            <div className="categories-div">
                {
                    combined().map( name => <div id='each-category' key={name}>
                    <input type="checkbox" id={name}/>
                    <label htmlFor={name} className='item'>{name}</label>
                    </div>)
                }
            </div>
        </div>  
    )
}