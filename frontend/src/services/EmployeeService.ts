import axios from "axios";

const EMPLOYEE_API_BASE_URL = "/admin/employees";

class EmployeeService {
  saveEmployee(employee:any) {
    return axios.post('./hosts', employee);
  }

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  deleteEmployee(id:any) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  getEmployeeById(id:any) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  updateEmployee(employee:any, id:any) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
  }
}

export default new EmployeeService();