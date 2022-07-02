import './ConfirmDelete.css'
import {useDispatch} from 'react-redux'

export const ConfirmDelete = ({ setShowDelete,id, delProd }) => {
    
    const dispatch = useDispatch()
    
    const pname = delProd.pName
    const des = delProd.des
    const quent = delProd.quent
    const pri = delProd.pri
    const siz = delProd.siz

    const deleteItem = () => {
        setShowDelete(true)
        dispatch({
            type:"DELETE_PRODUCT",
            payload:id
        })
        
        dispatch({
            type:"ADD_TO_DELETED_PRODUCTS",
            payload:{
                pname, des, quent, pri, siz
            }            
        })
        setShowDelete(false)
    }
    
    return(
        <div className="confirm-delete">
                <div className="confirm-delete-container">
                        <div className="delete-header">
                            <h1 className="d-head">Are your sure ?</h1>
                        </div>
                        <div className="delete-info">
                            <p className="info-text-d">
                                Once you delete an item it went to '<strong>Delete</strong>' section. You can't get it back in Future !!
                            </p>
                        </div>
                        <div className="delete-footer">
                            <button className="delete-md-bt-c" onClick={() => setShowDelete(false)}>Cancel</button>
                            <button className="delete-md-bt-d" onClick={deleteItem}>Delete</button>
                        </div>
                </div>
        </div>
    )
}