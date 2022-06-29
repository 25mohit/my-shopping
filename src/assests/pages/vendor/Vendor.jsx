import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Vendor.css'

export const Vendor = () => {
    const [pTitle, setPTitle] = useState('')
    const [pCategory, setPCategory] = useState('')
    const [pSizes, setPSizes] = useState([])
    const [pPrice, setPPrice] = useState()
    const [pDescription, setPDescription] = useState('')

    const dispatch = useDispatch()

    const submitProduct = (e) => {
        e.preventDefault()
        dispatch({
            type: "SELL_PRODUCT",
            payload:{
                id: new Date().getTime(),
                pTitle, pCategory, pSizes, pPrice, pDescription
            }
        })
        alert('Added !')
    }
    return(
        <div className="vendor-div">
                <form action="submit" className='vendor-form'>
                    <input type="text" placeholder='Product Title' value={pTitle} onChange={ e => setPTitle(e.target.value)}/>
                    <select name="" id="" value={pCategory} onChange={ e => setPCategory(e.target.value)}>
                        <option value="">Select</option>
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
                            <input type="checkbox" id='lSize' onChange={e=> setPSizes(e.target.value?[...pSizes,'L']: pSizes.filter(i => i !== 'L'))}/>
                            <label htmlFor="lSize">L</label>
                            <input type="checkbox" id='xlSize' onChange={e=> setPSizes(e.target.value?[...pSizes,'XL']: pSizes.filter(i => i !== 'XL'))}/>
                            <label htmlFor="xlSize">XL</label>
                            <input type="checkbox" id='mSize' onChange={e=> setPSizes(e.target.value?[...pSizes,'M']: pSizes.filter(i => i !== 'M'))}/>
                            <label htmlFor="mSize">M</label>
                    </div>
                    <input type="text" placeholder='Product Price' value={pPrice} onChange={ e => setPPrice(e.target.value)}/>
                    <input type="text" placeholder='Decription' value={pDescription} onChange={ e => setPDescription(e.target.value)}/>
                    <button onClick={ submitProduct }>SUBMIT</button>
                </form>
        </div>
    )
}