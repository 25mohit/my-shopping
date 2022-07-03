import './ProductTable.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { BsFillTrashFill } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'
import { ConfirmDelete } from '../confirmDelete/ConfirmDelete'
import { useState } from 'react'
import { EditProduct } from '../editProduct/EditProduct'

export const ProductsTable = () => {

    const [showDelete, setShowDelete] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [dId, setDId] = useState()
    const [editId, setEditId] = useState()
    const [delProd, setDelProd] = useState({pName:'', des:'', quent:'', pri:'', siz:''})
    const [updProd, setUpdProd] = useState({pTitle:'', pDescription:'', pQty:'',pPrice:'',pSizes:[]})

    const products = useSelector(state => state.products)

    const func = (id, title, desc, size, qty, pris ) => {
        setShowDelete(true)
        setDId(id)
        setDelProd({pName: title, des:desc, quent: qty, pri:pris, siz: size})
    }

    const updateProduct = (id, title, desc, size, qty, pris ) => {
        setShowEdit(true)
        setEditId(id)
        setUpdProd({pTitle:title, pDescription:desc, pSizes:[size], pQty: qty, pPrice:pris})
    }

    return(
        <div className='product-table'>
             <table>
                <tbody>
                    <tr id='tb-tr'>
                        <th id='tb-th'>No.</th>
                        <th id='tb-th'>Product Title</th>
                        <th id='tb-th'>Description</th>
                        <th id='tb-th'>Sizes</th>
                        <th id='tb-th'>Quantity</th>
                        <th id='tb-th'>Price</th>
                    </tr>
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
                        <td>{ product.pPrice }
                                <span id='icons-div'>
                                    <FaRegEdit  className='tb-dl-ic' onClick={() => { updateProduct(
                                    product.id, 
                                    product.pTitle, 
                                    product.pDescription,
                                    product.pSizes,
                                    product.pQty,
                                    product.pPrice
                                    )}}/>
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
                    </tbody>
                </table>
                    {showDelete && <ConfirmDelete setShowDelete={ setShowDelete } id={dId} delProd={delProd}/>}
                    {showEdit && <EditProduct setShowEdit={ setShowEdit } updProd={ updProd } id={ editId }/>}
        </div>
    )
}