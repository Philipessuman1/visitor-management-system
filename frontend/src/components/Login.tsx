import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'

const optionList = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "yellow", label: "Yellow" },
  { value: "blue", label: "Blue" },
  { value: "white", label: "White" }
];

const Login = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data:{}) => {
    console.log(data);
    navigate('/')
  };

  const [selectedOptions, setSelectedOptions] = useState('');

  function handleSelect(data:any) {
    setSelectedOptions(data);
    console.log(data)
  }

  return (
      <>
      <div className="container ">
        <h2 className=''>Please Log In With Your Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className='form-label'>Name</label>
          <input 
            className='form-control'
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
            <Select
              options={optionList}
              value={selectedOptions}
              onChange={handleSelect}
              required
            />
        </div>
        <div className="mb-3">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
      </>
  )
}

export default Login
