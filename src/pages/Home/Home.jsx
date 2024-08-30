import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'

const Home = ({title, banner}) => {
  return (
    <div>
      <Banner title={title} banner={banner}/>
    </div>
  )
}

export default Home