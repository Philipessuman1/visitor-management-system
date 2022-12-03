import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Protected = (children: any) => {
    const navigate =useNavigate()

	const token = localStorage.getItem("token");

	if (!token) {
		return <Navigate to="/signIn" replace={true} />
       
	}
	return children;
};

export default Protected;