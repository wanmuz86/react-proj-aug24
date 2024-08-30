import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Featured from '../../components/Featured/Featured'

const Home = ({title, banner}) => {
  return (
    <div>
      <Banner title={title} banner={banner}/>
      <Featured/>
    </div>
  )
}

export default Home