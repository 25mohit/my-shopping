import './DeletedProducts.css'
import { useSelector } from 'react-redux'

export const DeletedProducts = () => {
    const deletedProducts = useSelector(state => state.deleteProducts)
    console.log(deletedProducts);
    return(
        <div className="deleted-prod">
                <table>
                    <tr id='tr-hd'>
                        <th>No.</th>
                        <th>Product Title</th>
                        <th>Description</th>
                        <th>Sizes</th>
                        <th>Quantity</th>
                        <th>Prices</th>
                    </tr>
                    <tbody>
                        {
                            deletedProducts.map((items, i) => <tr key={ i }>
                                <td>{i+1}</td>
                                <td>{ items.pname }</td>
                                <td>{ items.des }</td>
                                <td>{ items.siz }</td>
                                <td>{ items.quent }</td>
                                <td>{ items.pri }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </div>
    )

}