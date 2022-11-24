import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Visitor from './pages/Visitor'
import Host from './pages/Host'
import Admin from './pages/Admin'

import './App.css'
import QrcodeReader from './components/QrcodeReader'
import Login from './components/Login'
import SignIn from './components/SignIn'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/visitor' element={<Visitor/>}    />
        <Route path='/host' element={<Host/>}    />
        <Route path='/admin' element={<Admin/>}    />
        <Route path='/scanner' element={<QrcodeReader />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
