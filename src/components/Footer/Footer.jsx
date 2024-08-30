import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-dark p-5 mt-3'>
      <div className='container'>

        <div className='row'>
          <div className='col-3'>
            <ul className='unstyled-list'>
              <li className='list-unstyled-list'><a href="#">About</a></li>
              <li className='list-unstyled-list'><a href="#">FAQ</a></li>
              <li className='list-unstyled-list'><a href="#">Polict</a></li>
              <li className='list-unstyled-list'><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className='col-3'>
          <ul className='unstyled-list'>
              <li className='list-unstyled-list'><Link to="/categories/men's clothing">Men's clothing</Link></li>
              <li className='list-unstyled-list'><Link to="/categories/women's clothing">Women's clothing</Link></li>
              <li className='list-unstyled-list'><Link to="/categories/jewelery">Jewelery</Link></li>
              <li className='list-unstyled-list'><Link to="/categories/electronics">Electronics</Link></li>
            </ul>
            
          </div>
          <div className='col-3'>
          <ul className='unstyled-list'>
              <li className='list-unstyled-list'><a href="#">Facebook</a></li>
              <li className='list-unstyled-list'><a href="#">Twitter</a></li>
              <li className='list-unstyled-list'><a href="#">Instagram</a></li>
              <li className='list-unstyled-list'><a href="#">Tiktok</a></li>
            </ul>
            
          </div>
          <div className='col-3 text-light'>
            <h5>Shopper Inc</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer