import './ProductTable.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { BsFillTrashFill } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { ConfirmDelete } from '../confirmDelete/ConfirmDelete'
import { useState } from 'react'

export const ProductsTable = () => {

    const [showDelete, setShowDelete] = useState(false)
    const [dId, setDId] = useState()
    const [delProd, setDelProd] = useState({pName:'', des:'', quent:'', pri:'', siz:''})

    const products = useSelector(state => state.products)
        console.log(products);

    const func = (id, title, desc, size, qty, pris ) => {
        setShowDelete(true)
        setDId(id)
        setDelProd({pName: title, des:desc, quent: qty, pri:pris, siz: size})
    }
    return(
        <div className='product-table'>
             <table>
                                                    <tr id='tb-tr'>
                                                        <th id='tb-th'>No.</th>
                                                        <th id='tb-th'>Product Title</th>
                                                        <th id='tb-th'>Description</th>
                                                        <th id='tb-th'>Sizes</th>
                                                        <th id='tb-th'>Quantity</th>
                                                        <th id='tb-th'>Price</th>
                                                    </tr>
                                                <tbody>
                                                {
                                                    products.map((product,i) => <tr key={ product.id } className='map-tr'>
                                                        <td>{i+1}</td>
                                                        <td>{ product.pTitle }</td>
                                                        <td>{ product.pDescription}</td>
                                                        <td>
                                                            { product.pSizes && 
                                                            <select name="" id="size-select">
                                                                <option value="" disabled>Sizes</option>
                                                            { product.pSizes.map((size, i)=> <option key={i}>{ size }</option>)}
                                                            </select>}
                                                            </td>
                                                        <td>{ product.pQty }</td>
                                                        <td><span >{ product.pPrice }</span>
                                                        <span id='icons-div'>
                                                           <FaRegEdit  className='tb-dl-ic'/>
                                                            <BsFillTrashFill className='tb-dl-ic' onClick={() => {
                                                                func(product.id, 
                                                                product.pTitle, 
                                                                product.pDescription,
                                                                product.pSize,
                                                                product.pQty,
                                                                product.pPrice
                                                                )}}/>
                                                        </span>
                                                            </td>
                                                    </tr>
                                                    )}
                                                    {showDelete && <ConfirmDelete setShowDelete={ setShowDelete } id={dId} delProd={delProd}/>}
                                                    </tbody>
                                                </table>
        </div>
    )
}