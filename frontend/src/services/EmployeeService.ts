import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:4000";

class EmployeeService {
  saveEmployee(employee: { id: string; Name: string; email: string; position: string; contact: string; }) {
    return axios.post("/addhost", employee);
  }

  getEmployees() {
    return axios.get("/hosts");
  }

  deleteEmployee(id: string) {
    return axios.delete("/deletehost/:id");
  }

  // updateEmployee(employee: any, id: string) {
  //   return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
  // }
}

export default new EmployeeService();