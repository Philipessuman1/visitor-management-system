import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    Name: "",
    email: "",
    position:"",
    contact: ""
  });

  const navigate = useNavigate();
  const success = () => toast('employee added', {autoClose:2000})
  const failure = () => toast('Failed to add', {autoClose: 2000})

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        // console.log(response);
        success()
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
        failure()
      });
  };

  const reset = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setEmployee({
      id: "",
      Name: "",
      email: "",
      position:"",
      contact:""
    });
  };

  return (
    <div className="d-flex">
      <div className="p-2 m-auto pt-4 background">
        <div className="m-2">
          <h1>Add New Employee</h1>
        </div>
        <div className="d-flex flex-column m-2">
          <label className="">
            Name
          </label>
          <input
            type="text"
            name="Name"
            value={employee.Name}
            required
            onChange={(e) => handleChange(e)}
            className="form-control" />
        </div>
        <div className="d-flex flex-column m-2">
          <label className="">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="form-control" />
        </div>
        <div className="d-flex flex-column m-2">
          <label className="">
            Position 
          </label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={(e) => handleChange(e)}
            className="form-control" />
        </div>
        <div className="d-flex flex-column m-2">
          <label className="">
            Contact
          </label>
          <input
            type="text"
            name="contact"
            value={employee.contact}
            onChange={(e) => handleChange(e)}
            className="form-control" />
        </div>

        <div className="d-flex mt-3">
          <button
            onClick={saveEmployee}
            className="btn btn-success mx-3">
            Save
          </button>
          <button
            onClick={reset}
            className="btn btn-danger">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
