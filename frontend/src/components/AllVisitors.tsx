import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const AllVisitors = () => {
  interface Visitor {
    name:string;
    email:string;
    company:string;
    phone:string;
    host:string;
    date:string;
  }

  const [allVisitors,setAllVisitors] = useState<Visitor[]>([])
  const [loading, setLoading] = useState(true)
  
  const failure = () => toast('Failed to load data from server',{autoClose:3000})


  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try {
        const response = await axios.get("http://localhost:4000/visitors")
        setAllVisitors(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  },[])

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
            <td>{visitor.date}</td>
            </tr>
            ))}
        </tbody> )}
        </table>
    </div>
  )
}

export default AllVisitors
