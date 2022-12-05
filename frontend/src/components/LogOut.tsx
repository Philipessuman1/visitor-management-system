import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import LiveVisitors from './LiveVisitors'

const LogOut:React.FC = () => {
    const navigate = useNavigate()
    const notify = () => toast('log out successful')
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e: { preventDefault: () => void; target: { value: any } }) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };

    const handleLogout = () => {
      axios.delete('/signoutvisitor/:id').then(response => console.log(response))
      .catch((err)=> console.log(err))
      navigate('/')
    }

    const handleSubmit = () => {
      axios.delete('/signoutvisitor/id')
    }

  return (
    <div className='home_background d-flex flex-column justify-content-center
    align-items-center'>
        <h3 className='w-50 fs-bold'>Log Out with Your Name</h3>
        <form className='d-flex flex-column  w-50' onSubmit={handleSubmit}>
            <label className='form-label fw-bold'>Name</label>
            <input  
                type='search'
                placeholder='Enter your name '
                className='form-control mb-3 '
                onChange={handleChange}
                value={searchInput}
            />
        <div className='d-flex  '>
            <button className='btn btn-danger m-3  ' onClick={() => handleLogout()}>Log Out</button>
            <button className='btn btn-primary m-3 ' onClick={()=> navigate('/')}>Back</button>
          </div>
    
        </form>
    </div>
  )
}

export default LogOut
