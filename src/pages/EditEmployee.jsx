import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEmployeeById } from "../services/employeeService";
import { useUpdateEmployee } from "../hooks/useEmployeeMutations";
import EmployeeForm from "../components/employees/EmployeeForm";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const updateEmployee = useUpdateEmployee();

  const { data, isLoading } = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeById(id),
  });

  const handleSubmit = (formData) => {
    updateEmployee.mutate(
      { id, data: formData },
      {
        onSuccess: () => navigate("/employees"),
      },
    );
  };

  if (isLoading) return <p>Loading employee...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Employee</h2>

      <EmployeeForm
        defaultValues={data}
        onSubmit={handleSubmit}
        loading={updateEmployee.isPending}
      />
    </div>
  );
}
