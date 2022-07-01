import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './AddProfile.css'

export const AddProfile = ({ setShowProfile }) => {
        const [sName, setSName] = useState('')
        const [sEmail, setSEmail] = useState('')
        const [sMobile, setSMobile] = useState()
        const [company, setCompany] = useState('')
        const [gst, setGst] = useState()

        const dispatch = useDispatch()

        const addProfile = (e) => {
                e.preventDefault()
                dispatch({
                        type:"SELLER_PROFILE",
                        payload:{sName, sEmail, sMobile, company, gst}
                })
        }
    return(
        <div className="add-profile">
                <div className="add-profile-container">
                        <div className="ad-pr-head">
                                <h1 className="up-pr">Add Profile</h1>
                                <button id='md-cl-bt' onClick={() => setShowProfile(false)}>X</button>
                        </div>
                        <div className="center-form">
                        <form action="submit" className="update-profile">
                                <label htmlFor="sName" id='lable'>Name</label>
                                <input type="text" value={ sName } onChange={e=>setSName(e.target.value)} name='sName' id='input-field'/>
                                <label htmlFor="sName" id='lable'>Email</label>
                                <input type="text" value={ sEmail } onChange={e=>setSEmail(e.target.value)} name='sName' id='input-field'/>
                                <label htmlFor="sName" id='lable'>Mobile</label>
                                <input type="text" value={ sMobile } onChange={e=>setSMobile(e.target.value)} name='sName' id='input-field'/>
                                <label htmlFor="sName" id='lable'>Company Name</label>
                                <input type="text" value={ company } onChange={e=>setCompany(e.target.value)} name='sName' id='input-field'/>
                                <label htmlFor="sName" id='lable'>GSTIN No.</label>
                                <input type="text" value={ gst } onChange={e=>setGst(e.target.value)} name='sName' id='input-field'/>
                                <button id='add' onClick={ addProfile }>ADD</button>
                        </form>
                        </div>
                </div>
        </div>
    )
}