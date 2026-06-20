import EmployeeForm from "../components/employees/EmployeeForm";
import { useCreateEmployee } from "../hooks/useEmployeeMutations";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
  const createEmployee = useCreateEmployee();
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    createEmployee.mutate(data, {
      onSuccess: () => navigate("/employees"),
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Employee</h2>

      <EmployeeForm
        defaultValues={{
          name: "",
          email: "",
          department: "",
          salary: 0,
          status: "Active",
        }}
        onSubmit={handleSubmit}
        loading={createEmployee.isPending}
      />
    </div>
  );
}
