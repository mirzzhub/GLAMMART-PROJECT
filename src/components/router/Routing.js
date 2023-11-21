import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Login from '../../login'

const Routing = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default Routing