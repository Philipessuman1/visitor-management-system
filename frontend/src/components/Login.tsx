import axios from 'axios';
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import { toast } from 'react-toastify'

const optionList = [
  { value: "Philip Essuman", label: "Philip Essuman" },
  { value: "Emmanuel Odotei", label: "Emmanuel Odotei"},
  { value: 'Tracy Asare', label:'Tracy Asare' }
];

const Login = () => {

  const navigate = useNavigate()
  const notify = () => toast('Log in successful')
  const failure = () => toast('Log in Unsuccessful')

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const OnSubmit = (data:{}) => {
    axios.post('/addvisitor',data).then(response => {
      try {
        console.log(data)
        notify()
      } catch (error) {
        console.log(error)
        failure()
      }
    })
    
    setTimeout(() => navigate('/'),5000) 
  };

  const [selectedOptions, setSelectedOptions] = useState('');

  return (
      <>
        <div className="home_background d-flex flex-column justify-content-center
         align-items-center">
          <form className='container-sm w-50 form-bgColor' onSubmit={handleSubmit(OnSubmit)}>
          <h2 className='d-flex justify-content-center d-inline'>Please Log In With Your Details</h2>
            <div className="mb-3">
              <label className='form-label'>Name</label>
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
              <label className='form-label'>Company Name</label>
              <input
                className='form-control'
                placeholder='eg.Microsoft Ghana' 
                type='text'
                {...register('company', {
                  required:true,
                  minLength: 2
                })}
              />
              {errors.company && errors.company.type === "required" && (
                <p className="errorMessage">Company Name is required.</p>
              )}
              {errors.company && errors.company.type === "minLength" && (
                <p className="errorMessage">
                  Company name should be valid
                </p>
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
            <div className="mb-3">
              <label className='form-label'>Select Your Host</label>
                  <Controller
                    name="host"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                    <Select {...field} className='form-control' options={optionList} />
                    )}
                  />
                  {errors.host && (
                    <p className="errorMessage">Please select your host</p>
                  )}
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <button className='btn btn-danger' onClick={() => navigate('/')}>Cancel</button>
              <button className='btn btn-success' type="submit">Login</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Login
