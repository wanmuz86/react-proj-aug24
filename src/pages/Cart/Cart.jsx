import React from 'react'
import './Cart.css'
import { useCart } from '../../libs/context/CartContext'

const Cart = () => {
  const { state } = useCart();
  return (
    <div>
      <h2>Cart</h2>
      {
        state.cart.length === 0 ?
          <p>No item in cart at the moment.</p>
          :
          <ul>{
            state.cart.map(val => <li key={val.id}>{val.item.title} - {val.quantity}</li>)
          }
          </ul>
      }
    </div>
  )
}

export default Cart