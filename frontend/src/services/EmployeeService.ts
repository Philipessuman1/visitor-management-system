import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:4000";

class EmployeeService {
  saveEmployee(employee: { id: string; Name: string; email: string; position: string; contact: string; }) {
    return axios.post("http://localhost:4000/addhost", employee);
  }

  getEmployees() {
    return axios.get("http://localhost:4000/hosts");
  }

  deleteEmployee(id: string) {
    return axios.delete("http://localhost:4000/deletehost/:id");
  }

  // updateEmployee(employee: any, id: string) {
  //   return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
  // }
}

export default new EmployeeService();