import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Host from './pages/Host'
import Admin from './pages/Admin'
import './App.css'
import QrcodeReader from './components/QrcodeReader'
import Login from './components/Login'
import Employee from './components/Employee'
import LiveVisitors from './components/LiveVisitors'
import AllVisitors from './components/AllVisitors'
import AddEmployee from './components/AddEmployee'
import EmployeeList from './components/EmployeeList'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/host' element={<Host/>}    />
        <Route path='/admin' element={<Admin/>}>
          <Route path='employee' element={<Employee/>}>
            <Route path='employeeList' element={<EmployeeList />} />
            <Route path='addEmployee' element={<AddEmployee />} />
          </Route>
          <Route path='live-visitors' element={<LiveVisitors/>} />
          <Route path='all-visitors' element={<AllVisitors />} />
        </Route>
        <Route path='/scanner' element={<QrcodeReader />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
