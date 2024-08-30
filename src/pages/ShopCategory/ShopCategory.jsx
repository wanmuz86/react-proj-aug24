import React from 'react'
import './ShopCategory.css'
import Banner from '../../components/Banner/Banner'

const ShopCategory = ({title, banner}) => {
  return (
    <div>
      <Banner title={title} banner={banner}/>
    </div>
  )
}

export default ShopCategory