import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import QrcodeGenerator from "../components/QrcodeGenerator";
import profilepic from '../assets/amalitech_logo2.jpg'
import { useForm } from 'react-hook-form'
import { AiFillHome } from 'react-icons/ai';
import Employee from '../components/Employee';



export default function Host(){

  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data:{}) => {
    console.log(data);
    return data
    navigate('/')
  };


  return (
    <div>
      <div className='d-flex justify-content-between m-0 mb-0 nav-background w-100'>
        <NavLink to='/' 
        style={{color:'white', textDecoration: 'none',marginLeft:'2rem', marginTop:'1rem'}}>
          <AiFillHome />
          Home
        </NavLink>
        <div className='d-flex align-items-center justify-content-center mb-0 mt-1 mx-2'>
          <img className='profile-pic' src={profilepic} alt='profile-pic' />
          <p className='username'>Amalitech</p>
        </div>
      </div>

      <div className='d-flex justify-content-between appointment-form'>
        <div>
          <QrcodeGenerator />
        </div>
      </div>
    </div>
  )
}

