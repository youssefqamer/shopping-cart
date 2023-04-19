import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItems, removeProducts } from '../StoreData/ItemsSlice';

export default function Cart() {
 let {items}=useSelector((state)=>state.items)
 let dispatch=useDispatch()
  return (
  <>
<div className='my-5'>
    <h2 className='mb-4 cartItem'>Cart item</h2>
    {items.length===0?<h5>cart is empty</h5>:<div className='table-responsive'>
    <table className=' w-100'>
      <thead className='fw-bold'>
      <tr className='bg-danger'>
        <td>#</td>
        <td>Name</td>
        <td>Price</td>
        <td>image</td>
        <td>quantity</td>
        <td>remove</td>
      </tr>
      </thead>
      {items.map((product,index)=>{
        return <tbody className='' key={product.id}>
          <tr className='border-bottom'>
            <td><span>{index+1}</span></td>
            <td className='p-title'><h6>{product.title}</h6></td>
            <td><span className='d-block pt-1 price fs-4 '>{product.price}$</span></td>
            <td><img src={product.image} alt="" className='cart-image '/></td>
            <td>
            <button className='btn btn-info text-white' onClick={()=>dispatch(addItem(product))}>+</button>
            <span className='mx-3 '>{product.quantity}</span>
            <button className='btn btn-danger' onClick={()=>dispatch(removeItems(product))}>-</button>
            </td>
            <td><i className="fa-solid fa-trash fs-4 mx-1 bg-danger btn text-white" onClick={()=>dispatch(removeProducts(product))}></i></td>
          </tr>
        </tbody>
      })}
    </table>
    </div>}
    
    

  </div>
  
  </>
  )
}





