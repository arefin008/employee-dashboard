import api from "./api";

// GET all employees
export const getEmployees = async () => {
  const res = await api.get("/employees");
  return res.data;
};

// GET single employee
export const getEmployeeById = async (id) => {
  const res = await api.get(`/employees/${id}`);
  return res.data;
};

// CREATE employee
export const createEmployee = async (data) => {
  const res = await api.post("/employees", data);
  return res.data;
};

// UPDATE employee
export const updateEmployee = async (id, data) => {
  const res = await api.put(`/employees/${id}`, data);
  return res.data;
};

// DELETE employee
export const deleteEmployee = async (id) => {
  const res = await api.delete(`/employees/${id}`);
  return res.data;
};
