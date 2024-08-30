import React from 'react'
import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../../libs/context/CartContext'


const Header = () => {
  const {state} = useCart()
    const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Shopper</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link " to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories/men's clothing">Men's clothing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories/women's clothing">Women's clothing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories/jewelery">Jewelery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categories/electronics">Electronics</NavLink>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <button className="btn btn-outline-warning" onClick={()=>navigate('/cart')}><i className="bi bi-cart-fill"></i> ({state.cart.length})</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header