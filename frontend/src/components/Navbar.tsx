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
        style={({ isActive }) => ({
          color: isActive ? '#E45218' : 'white',
          textDecoration: isActive ? 'none' : 'none',
          background: isActive ? 'white ' : '#E45218',
          fontWeight: 'bolder'
        })}>
          <AiFillHome />
          Home
        </NavLink>
        {/* <NavLink to='live-visitors'
        style={({ isActive }) => ({
          color: isActive ? '#E45218' : 'white',
          textDecoration: isActive ? 'none' : 'none',
          background: isActive ? 'white ' : '#E45218',
          fontWeight: 'bolder'
        })}>
          Live-Visitors
        </NavLink> */}
        <NavLink to='daily-visits'
        style={({ isActive }) => ({
          color: isActive ? '#E45218' : 'white',
          textDecoration: isActive ? 'none' : 'none',
          background: isActive ? 'white ' : '#E45218',
          fontWeight: 'bolder'
        })}>
          Daily-Visits
        </NavLink>
        <NavLink to='all-visitors'
        style={({ isActive }) => ({
          color: isActive ? '#E45218' : 'white',
          textDecoration: isActive ? 'none' : 'none',
          background: isActive ? 'white ' : '#E45218',
          fontWeight: 'bolder'
        })}>
          All-Visitors
        </NavLink>
        <NavLink to='employee'
        style={({ isActive }) => ({
          color: isActive ? '#E45218' : 'white',
          textDecoration: isActive ? 'none' : 'none',
          background: isActive ? 'white ' : '#E45218',
          fontWeight: 'bolder'
        })}>
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
