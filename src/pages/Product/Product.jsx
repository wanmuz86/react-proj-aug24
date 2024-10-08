import React from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import useFetch from '../../libs/hooks/useFetch'
import { useCart } from '../../libs/context/CartContext'

const Product = () => {
  const { id } = useParams()
  const { loading, data, error } = useFetch(`https://fakestoreapi.com/products/${id}`)
  const {dispatch} = useCart();

  const addToCart = () => {
    dispatch({type:'ADD_ITEM', payload:{item:data, quantity:1}});
  }

  return (
    <div className='container py-3'>
      {loading && <p>Loading...</p>}
      {error && <p>An error occured</p>}
      {data && 
      <div className='row'>
        <div className='col-6'>
          <img src={data.image} alt={data.product} className='img-fluid'/>

        </div>
        <div className='col-6'>
          <h3>{data.title}</h3>
          <h5 className='text-secondary'>USD {data.price} - {data.category}</h5>
          <p>{data.description}</p>
          <button className='btn-primary btn' onClick={addToCart}>Add to Cart</button>

        </div>
        </div>
        }
    </div>
  )
}

export default Product