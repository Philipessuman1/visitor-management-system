import React, { useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router';


const SignIn = () => {

const [values, setValues] = useState({
	email: "",
	password: "",
});
const navigate = useNavigate()

const handleSubmit = (e: { preventDefault: () => void; }) => {
	e.preventDefault();
	axios.post("https://reqres.in/api/login", {
			email: values.email,
			password: values.password,
		})
		.then((res: { data: { token: string; }; }) => {
			localStorage.setItem("token", res.data.token);
			navigate("/admin");
		})
		.catch((err) => console.error(err));
};




	return (
		<div className='background'>
		 <form className='w-50 m-auto d-flex justify-content-center
		  align-items-center flex-column'
		  onSubmit={handleSubmit}>
				<div>
					<label>Email</label>
					   <input
							className='form-control m-2'
							type="email"
							placeholder="Email Address"
							required
					        onChange={(e) => setValues({ ...values, email: e.target.value })}
						/>
				</div>
				<div>
					<label>Password</label>
					<input
						className='form-control'
						type= "password"
						placeholder="Password"
						required
					    onChange={(e) => setValues({ ...values, password: e.target.value })}
						/>
				</div>
				<button type="submit" >
						Sign In
				</button>
		 </form>
		</div>
	);
};

export default SignIn;