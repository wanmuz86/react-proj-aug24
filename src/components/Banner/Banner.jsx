import React from 'react'
import './Banner.css'

const Banner = ({title, banner}) => {
  return (
    <div className='jumbotron text-center text-warning' style={{backgroundImage:`url(${banner})`, backgroundSize:'cover'}}>
        <h1 className='display-4'>{title}</h1>
        <p className='lead'>Shop until you drop</p>

    </div>
  )
}

export default Banner