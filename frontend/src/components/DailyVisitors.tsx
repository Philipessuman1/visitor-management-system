import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const DailyVisitors = () => {

  interface DailyVisits {
    date:any;
    numberOfVisits:any;
  }
  const [dailyVisits, setDailyVisits] = useState<DailyVisits[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      try {
        const response = await axios.get("http://localhost:4000/dailyvisits")
        setDailyVisits(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  },[])

  return (
    <div>
      <table className="table w-50 m-auto background mt-3">
        <thead>
            <tr>
            <th scope="col">Date</th>
            <th scope="col">Number of Visitors</th>
            </tr>
        </thead>
        {!loading && (
        <tbody>
          {dailyVisits.map((dailyVisit:DailyVisits)=>(
            <tr>
            <th scope="row">{dailyVisit.date}</th>
            <td>{dailyVisit.numberOfVisits}</td>
            </tr>
             ))}
        </tbody> )}
        </table>
    </div>
  )
}

export default DailyVisitors
