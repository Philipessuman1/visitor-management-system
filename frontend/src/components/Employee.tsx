import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import EmployeeList from './EmployeeList'

const Employee = () => {
  return (
    <div>
     <div className='d-flex mx-4'>
        <button className='btn btn-filled'>
            <Link className='mx-4 text-decoration-none' to='addEmployee'>Add Employee</Link>
        </button>
        <button className='btn'>
            <Link className='mx-4 text-decoration-none' to='employeeList'> Employee list</Link>
        </button>
     </div>
      <Outlet/>
    </div>
  )
}

export default Employee
