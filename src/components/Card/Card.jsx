import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({product}) => {
    return (
        <Link to={`/products/${product.id}`} id="product-card">
        <div className="card p-3">
            <img src={product.image} className="card-img-top" alt={product.title}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <h6 className='text-secondary card-subtitle mb-2'>USD {product.price}</h6>
                    <p className="card-text">{product.description}</p>
                </div>
        </div>
        </Link>
    )
}

export default Card