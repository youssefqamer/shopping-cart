import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading/Loading'
import { getData } from '../StoreData/Api'
import { addItem } from '../StoreData/ItemsSlice'

export default function Products() {
  let dispatch=useDispatch()
  let {data}=useSelector((state)=>state.data)
  useEffect(() =>{
    dispatch(getData())
  }, [])
  
  return (
    <>
    {data.length>0? <div className="row my-5 text-center">
      {data.map((product)=>{
        return <div className="col-md-4 mb-2 height"  key={product.id}>
        <img src={product.image} alt="" className='mb-4 w-100' height='320'/>
       <div className='cardTitle'>
       <p>{product.title}</p>
        <span className='d-block mb-3'>{product.price}$</span>
       </div>
        <button onClick={()=>dispatch(addItem(product))} className=' main-color p-2 border-0 rounded-2 text-white d-block w-100'>Add To Cart</button>
      </div>
      })}
      
     
    </div>:<Loading/>}
   
    
    </>
  )
}
