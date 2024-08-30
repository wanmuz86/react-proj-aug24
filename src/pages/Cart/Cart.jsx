import React from 'react'
import './Cart.css'
import { useCart } from '../../libs/context/CartContext'
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
  const { state,dispatch, totalPrice } = useCart();
  return (
    <div className='container'>
      <h2>Cart</h2>
      {
        state.cart.length === 0 ?
          <p>No item in cart at the moment.</p>
          :
          <div>
          {
            state.cart.map(val => <CartItem key={val.item.id} cartItem={val}/>)
          }

          <hr />
         

          <button onClick={()=>dispatch({type:'EMPTY_CART'})} className='btn btn-outline-primary'>Empty Cart</button>
          <hr/>
          <h5>Total Price</h5>
          <h6>USD {totalPrice}</h6>
        
          </div>
          
      }
    </div>
  )
}

export default Cart