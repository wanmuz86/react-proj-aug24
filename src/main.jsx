import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import ShopCategory from './pages/ShopCategory/ShopCategory.jsx'
import Product from './pages/Product/Product.jsx'
import Cart from './pages/Cart/Cart.jsx'

import banner1 from './assets/banner1.jpg'
import banner2 from './assets/banner2.jpg'
import banner3 from './assets/banner3.jpg'

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home banner={banner1} title="Shoppr"/>
    },
    {
      path:"/categories/electronics",
      element:<ShopCategory banner={banner2} title="Electronics"/>
    },
    {
      path:"/categories/jewelery",
      element:<ShopCategory banner={banner3} title="Jewelery"/>
    },
    {
      path:"/categories/men's clothing",
      element:<ShopCategory banner={banner1} title="Men's clothing"/>
    },
    {
      path:"/categories/women's clothing",
      element:<ShopCategory banner={banner2} title="Women's clothing"/>
    },
    {
      path:"/products/:id",
      element:<Product/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },

  ]

}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
