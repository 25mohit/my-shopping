import { useEffect } from 'react'
import './Message.css'

export const Message = ({setShowMessage}) => {

   

    return(
        <div className="message-div">
                <div className="message-container">
                        <div className="message-head">
                                <p className="message-text">This Shopping Website Project is Currently Under-Development, all Features may not be working,
                                but Selling Section and Seller Profile Section is working you can test it out. <br /><strong>Thanks</strong></p>
                        </div>
                        <div className="footer-message">
                                <button className="message-cl-bt" onClick={() => setShowMessage(false)}>OK</button>
                        </div>
                </div>
        </div>
    )
}