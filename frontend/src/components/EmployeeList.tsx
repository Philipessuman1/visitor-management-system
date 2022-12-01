import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const EmployeeList = () => {
  return (
    <div>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">Position</th>
            <th scope="col">Contact</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark Jacobs</td>
            <td>markjocobs@gmail.com</td>
            <td>Junior developer</td>
            <td>0203148244</td>
            <td><AiFillDelete /></td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default EmployeeList
