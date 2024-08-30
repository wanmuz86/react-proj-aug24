import React from 'react'
import { useCart } from '../../libs/context/CartContext'

const CartItem = ({cartItem}) => {
    const {dispatch} = useCart();

    const incrementPressed = () => {
        dispatch({type:'ADD_ITEM', payload:{item:cartItem.item, quantity:1}})

    }

    const decrementPressed = () => {
        dispatch({type:'REMOVE_ITEM', payload:{item:cartItem.item, quantity:1}})
    }

  return (
    <div className="card p-5 my-3">
        <div className='row'>
            <div className='col-3'>
                <img src={cartItem.item.image} alt={cartItem.item.title} className='img-fluid'/>
            </div>
            <div className='col-9'>
                <h4>{cartItem.item.title}</h4>
                <p>USD {cartItem.item.price}</p>
                <p>
                    <button className='btn' onClick={decrementPressed}>-</button>
                    {cartItem.quantity}
                    <button className='btn' onClick={incrementPressed}>+</button>
                </p>
            </div>
        </div>
    </div>
  )
}

export default CartItem