import React from 'react'

const LogOut = () => {
  return (
    <div className='home_background d-flex flex-column justify-content-center
    align-items-center'>
        <h3 className='w-50 fs-bold'>Log Out with Your Name</h3>
        <div className='d-flex flex-column w-50'>
            <label className='form-label fw-bold'>Name</label>
            <input  
                type='text'
                placeholder='Enter your name '
                className='form-control mb-3'
            />
            <button className='btn btn-danger m-3 w-25 m-auto'>Log Out</button>
        </div>
    </div>
  )
}

export default LogOut
