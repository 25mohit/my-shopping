import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Vendor.css'

export const Vendor = () => {
    const [pTitle, setPTitle] = useState('')
    const [pCategory, setPCategory] = useState('')
    const [pSizes, setPSizes] = useState([])
    const [pPrice, setPPrice] = useState('')
    const [pQty, setPQty] = useState('')
    const [pDescription, setPDescription] = useState('')

    const dispatch = useDispatch()

    const submitProduct = (e) => {
        e.preventDefault()
        dispatch({
            type: "SELL_PRODUCT",
            payload:{
                id: new Date().getTime(),
                pTitle, pCategory, pSizes, pPrice, pQty, pDescription
            }
        })
        alert('Added !')
    }
    var qtyNumber = []
    for(let i=0;i<15;i++){
        qtyNumber.push(i+1)
    }
    
    return(
        <div className="vendor-div">
                    <h1 className="seller-heading">Sell your Product here ! <span id='hd-sp'>with just one click..</span></h1>
                <div className='form'>
                    <form action="" className='vendor-form'>
                    <input type="text" className='input-field' placeholder='Product Title' value={pTitle} onChange={ e => setPTitle(e.target.value)}/>
                    <select name="" id="" className='input-field' value={pQty} onChange={e => setPQty(e.target.value)}>
                        <option value="" disabled>Quantity</option>
                        {qtyNumber.map(num => <option key={ num } value={ num }>{ num }</option>)}
                    </select>
                    <select  className='input-field' value={pCategory} onChange={ e => setPCategory(e.target.value)}>
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
                    {(pCategory=='women Clothing' || pCategory=='men Clothing') && 
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
                    </div>}
                    <input type="text" className='input-field' placeholder='Product Price' value={pPrice} onChange={ e => setPPrice(e.target.value)}/>
                    <input type="text" className='input-field' placeholder='Decription' value={pDescription} onChange={ e => setPDescription(e.target.value)}/>
                    <button id='submit-bt' onClick={ submitProduct }>SUBMIT</button>
                    </form>
                </div>
        </div>
    )
}