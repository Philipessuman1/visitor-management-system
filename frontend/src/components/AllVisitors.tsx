import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllVisitors = () => {
  const [allVisitors,setAllVisitors] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try {
        const response = await axios.get('')
        setAllVisitors(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  },[])

  interface Visitor {
    name:string;
    email:string;
    company:string;
    phone:string;
    host:string;
  }

  return (
    <div>
           <table className="table background">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company</th>
            <th scope="col">Contact</th>
            <th scope="col">Host</th>
            <th scope="col">Log In time</th>
            <th scope="col">Log Out time</th>
            <th scope="col">Date</th>
            </tr>
        </thead>
        {!loading && (
        <tbody>
          {allVisitors.map((visitor:Visitor)=>(
            <tr>
            <td>{visitor.name}</td>
            <td>{visitor.email}</td>
            <td>{visitor.company}</td>
            <td>{visitor.phone}</td>
            <td>{visitor.host}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            </tr>
            ))}
        </tbody> )}
        </table>
    </div>
  )
}

export default AllVisitors
