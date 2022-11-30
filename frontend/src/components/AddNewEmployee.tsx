import { ResetTv } from '@mui/icons-material'
import React from 'react'
import { useForm } from 'react-hook-form'
import '../App.css'
import employee from '../data/employee'

const AddNewEmployee = () => {
    const {
        register,
        handleSubmit,
        formState:{errors }
    } = useForm()
    

    const onSubmit = (data:{}) => {
        console.log(JSON.stringify(data));
        
      };

  return (
    <div>
      <div>
      <form className='container-sm w-50 form-bgColor form-text' onSubmit={handleSubmit(onSubmit)}>
          <h2 className='d-flex justify-content-center d-inline'>Add Employee</h2>
            <div className="mb-3">
              <label className='form-label'>Name of Employee</label>
              <input 
                className='form-control'
                placeholder='eg.Daryl Jones'
                type='text'
                {...register('name', {
                  required:true,
                  minLength: 2
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="errorMessage">Name is required.</p>
              )}
              {errors.name && errors.name.type === "minLength" && (
                <p className="errorMessage">
                  Name should be valid
                </p>
              )}
              </div>
              <div className="mb-3">
              <label className='form-label'>Email</label>
              <input
                className='form-control'
                placeholder='eg. daryljones@gmail.com'
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errorMessage">Email is required.</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="errorMessage">Email is not valid.</p>
              )}
            </div>
            <div className="mb-3">
              <label className='form-label'>Position</label>
              <input
                className='form-control'
                placeholder='eg.Junior Developer' 
                type='text'
                {...register('position', {
                  required:true,
                  minLength: 2
                })}
              />
              {errors.position && errors.position.type === "required" && (
                <p className="errorMessage">Position is required</p>
              )}
              </div>
            <div className="mb-3">
              <label className='form-label'>Phone Number</label>
              <input
                className='form-control'
                placeholder='eg.0548012053'
                type="phone"
                {...register("phone", {
                  required: true,
                  minLength: 10
                })}
              />
              {errors.phone && errors.phone.type === "required" && (
                <p className="errorMessage">Phone number is required.</p>
              )}
              {errors.phone && errors.phone.type === "minLength" && (
                <p className="errorMessage">
                  Phone number is incomplete
                </p>
              )}
            </div>
            <div className="mb-3 d-flex justify-content-around">
              <button className='btn btn-danger' type='submit'>Save</button>
              <button className='btn btn-success'>Clear</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewEmployee
