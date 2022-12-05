import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import EmployeeService from '../services/EmployeeService'

const EmployeeList = () => {
  interface Employee  {
    id: any;
    name: string | null ;
    email: string | null;
    position: string | null;
    contact: string | number | null;
  }

const [employees,setEmployees] = useState<Employee[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try {
        const response = await EmployeeService.getEmployees()
        setEmployees(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  },[])

  const deleteEmployee= (e: { preventDefault: () => void }, id: any) => {
    e.preventDefault()
    EmployeeService.deleteEmployee(id)
    .then((res) => {
      if(employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id)
        })
      }
    })
  }

  return (
    <div >
        <table className="table background">
        <thead>
            <tr>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">Position</th>
            <th scope="col">Contact</th>
            <th scope="col">Delete</th>
            </tr>
        </thead>
        {!loading && (
        <tbody>
          {employees.map((employee:Employee)=>(
            <tr key={employee.name}>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.position}</td>
            <td>{employee.contact}</td>
            <td><a onClick={(e) => deleteEmployee(e,employee.id)}><AiFillDelete /></a></td>
            </tr>
            ))}
        </tbody> )}
        </table>
    </div>
  )
}

export default EmployeeList


