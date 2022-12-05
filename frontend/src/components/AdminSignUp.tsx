import React, { useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const AdminSignIn = () => {

const [values, setValues] = useState({
	email: "",
	password: "",
    confirmPassword:""
});
const navigate = useNavigate()
const notify = () => toast('sign in successful')
const failure = () => toast('unsuccesful')

function checkPassword(form: { password: { value: any; }; confirmPassword: { value: any; }; }) {
    // 👇 get passwords from the field using their name attribute
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // 👇 check if both match using if-else condition
    if (password.value != confirmPassword.value) {
      alert("Error! Password did not match.");
      return false;
    } else {
      alert("Password Match. Congratulations!");
      return true;
    }
  }

const handleSubmit = (e: { preventDefault: () => void; }) => {
	e.preventDefault();
    
	axios.post('/newadmin', {
			email: values.email,
			password: values.password,
		})
		.then((res: { data: { token: string; }; }) => {
			localStorage.setItem("token", res.data.token);
			notify()
			navigate("/admin");
		})
		.catch((err) => {
			console.error(err)
			failure()
		});
};


	return (
		<div className='home_background h-100vh d-flex justify-content-center 
		align-items-center position-relative'>
		 <form className='w-25 d-flex justify-content-center align-items-center 
		 flex-column background position-absolute translate-middle-x start-50 '
		  onSubmit={handleSubmit}>
			<h4>Hello!</h4>
			<h6 className='mb-4'>Sign Up with Your Details</h6>
				<div>
					<label>Email</label>
					   <input
							className='form-control mt-2 '
							type="email"
							placeholder="Email Address"
							required
					        onChange={(e) => setValues({ ...values, email: e.target.value })}
						/>
				</div>
				<div>
					<label className='form label mt-2'>Password</label>
					<input
						className='form-control mt-2'
						type= "password"
						placeholder="Password"
						required
					    onChange={(e) => setValues({ ...values, password: e.target.value })}
						/>
				</div>
				<div>
					<label className='form label mt-2'>Confirm Password</label>
					<input
						className='form-control mt-2'
						type= "password"
						placeholder="Password"
						required
					    onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
						/>
                        {}
				</div>
				<div className='d-flex flex-row justify-content-between'>
				<button type="submit" className='mt-4 btn btn-success' >
						Sign Up
				</button>
				<button className='btn btn-danger mt-4' onClick={() => navigate('/')}>Back</button>
				</div>
		 </form>
		</div>
	);
};

export default AdminSignIn;