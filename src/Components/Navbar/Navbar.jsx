import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Navbar() {
  let {totalItems}=useSelector((state)=>state.totalQuantatiy)
  let {totalPrice}=useSelector((state)=>state.totalPrice)
  return (
<>
<nav className="navbar navbar-expand-sm navbar-light main-color py-4">
  <div className="container">
    <a className="navbar-brand text-white fs-5 " >Store App</a>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
  <div className="collapse navbar-collapse" id="collapsibleNavId">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
          <Link className="nav-link active fs-5 text-white" aria-current="page" to=''>Products</Link>
        </li>    
        <li className="nav-item">
          <Link className="nav-link active fs-5 text-white" aria-current="page" to='cart'>Cart</Link>
        </li>
  </ul>
  </div>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item text-white cart">
          <span>$ {totalPrice.toFixed(2)}</span>
          <span className='position-relative'>Cart <i className="fa-solid fa-cart-plus"></i>
          <span className=' px-2 rounded-2 bg-info cart-badge'>{totalItems}</span>
          </span>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

</>  
)
}
