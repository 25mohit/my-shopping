import { useEffect } from 'react'
import './Message.css'

export const Message = ({setShowMessage}) => {

    return(
        <div className="message-div">
                <div className="message-container">
                        <div className="message-head">
                                <p className="message-text">This Shopping Website Project is Currently Under-Development, all Features may not be working,
                                but some features are working you can test it out. <br /></p>
                                <ul>
                                        <li>You can add, update or delete items.</li>
                                        <li>Dedicated Seller section, where seller can update their profile.</li>
                                        <li>Seller can see all listed active items, and in Deleted section seller see all Delete items and remove all from the list.</li>
                                        <li>Can add item to wishlist or to cart.</li>
                                        <li>Clear all wishlist at once.</li>
                                </ul>
                        </div>
                        <div className="footer-message">
                                <button className="message-cl-bt" onClick={() => setShowMessage(false)}>OK</button>
                        </div>
                </div>
        </div>
    )
}