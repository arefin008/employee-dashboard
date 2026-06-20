import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getEmployeeById } from "../services/employeeService";

export default function EmployeeDetails() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["employee", id],
    queryFn: () => getEmployeeById(id),
  });

  if (isLoading)
    return <div className="text-center mt-10">Loading employee...</div>;

  if (isError)
    return <div className="text-red-500">Failed to load employee</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Employee Details</h2>

      <div className="space-y-3">
        <p>
          <b>Name:</b> {data.name}
        </p>
        <p>
          <b>Email:</b> {data.email}
        </p>
        <p>
          <b>Department:</b> {data.department}
        </p>
        <p>
          <b>Salary:</b> ${data.salary}
        </p>

        <p>
          <b>Status:</b>{" "}
          <span
            className={`px-2 py-1 text-white rounded text-sm ${
              data.status === "Active" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {data.status}
          </span>
        </p>
      </div>
    </div>
  );
}
