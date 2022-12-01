import React from 'react'
import { NavLink } from 'react-router-dom'
import profilepic from '../assets/amalitech_logo2.jpg'
import { GrUserWorker} from 'react-icons/gr'
import { AiFillHome } from 'react-icons/ai'

const Navbar = () => {
  return (
    <>
      <div className=' nav-background d-flex justify-content-between'>
        <div className='d-flex justify-content-between w-75 mx-2 mt-3 mb-0'>
        <NavLink to='/'
        style={{color:'white', textDecoration: 'none'}}>
          <AiFillHome />
          Home
        </NavLink>
        <NavLink to='live-visitors'
        style={{color:'white', textDecoration: 'none'}}>
          Live-Visitors
        </NavLink>
        <NavLink to='frequentVisitors'
        style={{color:'white', textDecoration: 'none'}}>
          Frequent-Visitors
        </NavLink>
        <NavLink to='all-visitors'
        style={{color:'white', textDecoration: 'none'}}>
          All-Visitors
        </NavLink>
        <NavLink to='employee'
        style={{color:'white', textDecoration: 'none'}}>
          <GrUserWorker />
          Employees
        </NavLink>
        </div>
        <div className='d-flex align-items-center justify-content-center mb-0 mt-2 mx-2'>
        <img className='profile-pic' src={profilepic} alt='profile-pic' />
          <p className='mb-3 mt-0'>Admin</p>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default Navbar
