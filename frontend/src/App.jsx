import React from 'react'
import Navbar from './components/Navbar'
import Furniture from './components/Furniture'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Category from './pages/Category'
import Deals from './pages/Deals'
import Delivery from './pages/Delivery'
import New from './pages/New'

const App = () => {
  return (
    <div className=''>
      <Header/>
      <Routes>
        <Route path='/category' element={<Category/>}/>
        <Route path='/deals' element={<Deals/>}/>
        <Route path='/delivery' element={<Delivery/>}/>
        <Route path='/New' element={<New/>}/>
      </Routes>
    </div>
  )
}

export default App