import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { AddProfile } from '../../components/addProfile/AddProfile'
import { DeletedProducts } from '../../components/deletedProducts/DeletedProducts'
import { ProductsTable } from '../../components/productsTable/ProductsTable'
import './Seller.css'

export const Seller = () => {
    const [togglebar, setTogglebar] = useState(true)
    const [showProfile, setShowProfile] = useState(false)
    const [showDeleted, setShowDeleted] = useState(false)

    const userProfile = useSelector(state => state.seller)
    const dispatch = useDispatch()

    const clearAllItems = () => {
        dispatch({
            type:"CLEAR_ALL_DELETED_ITEMS",
        })
    }
    return(
        <div className="seller">
                <div className="seller-container">
                        <div className="seller-header">
                                <h1 className="seller-head">Seller Profile</h1>
                                <button className="add-profile-bt" onClick={() => {setShowProfile(true)}}>ADD</button>
                        </div>
                        <div className="seller-hero">
                                <div className="toogle-bar">
                                    <button className="toogle-bt-left" onClick={() => setTogglebar(true)}>Profile</button>
                                    <button className="toogle-bt-right" onClick={() => setTogglebar(false)}>Listed Items</button>
                                </div>
                                <div className="hero-container">
                                {togglebar ?<div className="seller-profile">
                                            <p className="seller-info"><span className="dt">Name : </span>{ userProfile.sName }</p>
                                            <p className="seller-info"><span className="dt">Email : </span>{ userProfile.sEmail }</p>
                                            <p className="seller-info"><span className="dt">Mobile : </span>{ userProfile.sMobile }</p>
                                            <p className="seller-info"><span className="dt">Company Name : </span>{ userProfile.company }</p>
                                            <p className="seller-info"><span className="dt">GST No. : </span>{ userProfile.gst }</p>
                                            <div className="profile-footer">
                                                <p>Policy</p>
                                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ipsum reprehenderit nihil assumenda sapiente, nesciunt veritatis magnam nobis dignissimos? Illo deleniti, expedita itaque voluptates fugit perferendis modi dolorem numquam eos.</li>
                                                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ipsum reprehenderit nihil assumenda sapiente, nesciunt veritatis</li>
                                            </div>
                                </div>
                                :<div className="seller-items">
                                    <div className="items-status">
                                        <div className="tgle-bt">
                                            <input type="checkbox" id='status-change' onClick={() => setShowDeleted(!showDeleted)}/>
                                            <label htmlFor="status-change" id='ch-lb'>Active / Deleted</label>
                                        </div>
                                        {showDeleted &&
                                        <div className="clear-dt-itms">
                                            <button className="clear-all" onClick={ clearAllItems }>Clear All</button>
                                        </div>}
                                    </div>
                                    {showDeleted ?  
                                    <div id='deleted-products-div'> <DeletedProducts /></div>:
                                    <div id='active-item-list'><ProductsTable /> </div>
                                        }
                                </div>}
                        </div>
                    </div>
            </div>
            {showProfile && <AddProfile setShowProfile={ setShowProfile }/>}
        </div>
    )
}