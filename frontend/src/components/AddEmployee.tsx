import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    Name: "",
    emailId: "",
    position:"",
    contact: ""
  });

  const navigate = useNavigate();

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmployee({
      id: "",
      Name: "",
      emailId: "",
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
            onChange={(e) => handleChange(e)}
            className="form-control" />
        </div>
        <div className="d-flex flex-column m-2">
          <label className="">
            Email
          </label>
          <input
            type="text"
            name="emailId"
            value={employee.emailId}
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
