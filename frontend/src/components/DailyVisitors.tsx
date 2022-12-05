import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const DailyVisitors = () => {
  const [dailyVisits, setDailyVisits] = useState([])

  useEffect(() => {
    axios.get('/dailyvisits')
    .then((response) => setDailyVisits(response.data))
    .catch((err) => console.log(console.error(err)
    ))
  },[])
  return (
    <div>
      {dailyVisits}
    </div>
  )
}

export default DailyVisitors
