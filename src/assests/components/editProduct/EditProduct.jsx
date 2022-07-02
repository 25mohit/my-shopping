import './EditProduct.css'
import { ImCross } from 'react-icons/im'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const EditProduct = ({setShowEdit, updProd, id}) => {
    const [pTitle, setPTitle] = useState(updProd.pTitle)
    const [pDescription, setPDescription] = useState(updProd.pDescription)
    const [pCategory, setPCategory] = useState()
    const [pSizes, setPSizes] = useState([])
    const [pQty, setPQty] = useState(updProd.pQty)
    const [pPrice, setPPrice] = useState(updProd.pPrice)

    const dispatch = useDispatch()
    console.log(updProd)

    const updateProduct = (e) => {
        e.preventDefault()
        dispatch({
            type: "EDIT_LISTED_PRODUCT",
            payload:{
                id, pTitle, pDescription, pCategory, pSizes, pQty, pPrice
            }
        })
        setShowEdit(false)
    }
    return(
        <div className="edit-product">
                <div className="edit-product-container">
                        <div className="edit-header">
                            <button className="edit-md-bt" onClick={() => setShowEdit(false)}><ImCross /></button>
                        </div>
                        <div className="edit-center-div">
                        <form action="" className="prd-rdit-frm">
                                <label htmlFor="prdName">Product Name</label>
                                <input type="text" name='prdName' id='edit-field'  value={pTitle} onChange={e => setPTitle(e.target.value)} />
                                <label htmlFor="prdName">Discription</label>
                                <input type="text" name='prdName' id='edit-field'  value={pDescription} onChange={e => setPDescription(e.target.value)}/>
                                <select name=""  id='edit-field' value={pQty} onChange={e => setPQty(e.target.value)}>
                                    <option value='' disabled>Quantity</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <select  id='edit-field'  value={pCategory} onChange={ e => setPCategory(e.target.value)}>
                                    <option value="" disabled>Select</option>
                                    <option value="tv , electronics">TV, Appliances, Electronics</option>
                                    <option value="mobiles , computers">Mobiles, Computers</option>
                                    <option value="men Clothing">Men's Fashion</option>
                                    <option value="women Clothing">Women's Fashion</option>
                                    <option value="beauty , health">Beauty, Health</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="car, moterbikes">Car, Moterbikes, Industrial</option>
                                    <option value="books">Books</option>
                                    <option value="baby products , toys">Baby Products, Toys</option>
                                </select>
                                <div className="product-sizes">
                                        <input className='checkbox' type="checkbox" id='sSize' onChange={e=> setPSizes(e.target.value?[...pSizes,'S']: pSizes.filter(i => i !== 'S'))}/>
                                        <label id='label-vendor' htmlFor="sSize">S</label>
                                        <input className='checkbox' type="checkbox" id='mSize' onChange={e=> setPSizes(e.target.value?[...pSizes,'M']: pSizes.filter(i => i !== 'M'))}/>
                                        <label id='label-vendor' htmlFor="mSize">M</label>
                                        <input className='checkbox' type="checkbox" id='lSize' onChange={e=> setPSizes(e.target.value?[...pSizes,'L']: pSizes.filter(i => i !== 'L'))}/>
                                        <label id='label-vendor' htmlFor="lSize">L</label>
                                        <input className='checkbox' type="checkbox" id='xlSize' onChange={e=> setPSizes(e.target.value?[...pSizes,'XL']: pSizes.filter(i => i !== 'XL'))}/>
                                        <label id='label-vendor' htmlFor="xlSize">XL</label>
                                        <input className='checkbox' type="checkbox" id='xxlSize' onChange={e=> setPSizes(e.target.value?[...pSizes,'XXL']: pSizes.filter(i => i !== 'XXL'))}/>
                                        <label id='label-vendor' htmlFor="xxlSize">XXL</label>
                                        <input className='checkbox' type="checkbox" id='xxxlSize' onChange={e=> setPSizes(e.target.value?[...pSizes,'XXXL']: pSizes.filter(i => i !== 'XXXl'))}/>
                                        <label id='label-vendor' htmlFor="xxxlSize">XXXL</label>
                                </div>
                                <label htmlFor="prdName">Price</label>
                                <input type="text" id='edit-field' name='prdName' value={pPrice} onChange={e=> setPPrice(e.target.value)}/>
                                <button onClick={ updateProduct } className='submit-bt'>UPDATE</button>
                        </form>
                        </div>
                </div>
        </div>
    )
}