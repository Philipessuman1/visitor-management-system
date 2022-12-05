import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
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
import DailyVisitors from './components/DailyVisitors'
import LogOut from './components/LogOut'
import Protected from './utils/Protected';
import AdminSignIn from './components/AdminSignIn';
import AdminSignUp from './components/AdminSignUp';



const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/host' element={<Host/>}    />
        <Route path='/admin' element={<Protected><Admin/></Protected>}>
          <Route index element={<AllVisitors />} />
          <Route index element={<LiveVisitors />} />
          <Route path='employee' element={<Employee/>}>
            <Route index element={<EmployeeList />} />
            <Route path='employeeList' element={<EmployeeList />} />
            <Route path='addEmployee' element={<AddEmployee />} />
          </Route>
          {/* <Route path='live-visitors' element={<LiveVisitors/>} /> */}
          <Route path='all-visitors' element={<AllVisitors />} />
          <Route path='daily-visits' element={<DailyVisitors />} />
        </Route>
        <Route path='/scanner' element={<QrcodeReader />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<LogOut />} />
        <Route path='/signIn' element={<AdminSignIn/>} />
        <Route path='/signUp' element={<AdminSignUp/>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
