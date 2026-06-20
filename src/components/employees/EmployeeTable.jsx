import EmployeeFilters from "./EmployeeFilters";
import Pagination from "./Pagination";
import TableSkeleton from "./TableSkeleton";
import EmptyState from "./EmptyState";

import { useDeleteEmployee } from "../../hooks/useEmployeeMutations";
import { useNavigate } from "react-router-dom";

export default function EmployeeTable(props) {
  const {
    data,
    loading,
    search,
    setSearch,
    department,
    setDepartment,
    sortKey,
    setSortKey,
    page,
    setPage,
    totalPages,
  } = props;

  const navigate = useNavigate();
  const deleteEmployee = useDeleteEmployee();

  const safeData = data || [];

  const renderTable = () => (
    <>
      <table className="w-full text-left border mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {safeData.map((emp) => (
            <tr key={emp.id} className="border-t">
              <td className="p-2">{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>${emp.salary}</td>

              <td>
                <span
                  className={`px-2 py-1 rounded text-white text-xs ${
                    emp.status === "Active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {emp.status}
                </span>
              </td>

              <td className="flex gap-2 p-2">
                <button
                  onClick={() => navigate(`/employees/${emp.id}`)}
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  View
                </button>

                <button
                  onClick={() => navigate(`/employees/edit/${emp.id}`)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteEmployee.mutate(emp.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </>
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      {/* Filters */}
      <EmployeeFilters
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        sortKey={sortKey}
        setSortKey={setSortKey}
      />

      {/* UI STATES */}
      {loading ? (
        <TableSkeleton />
      ) : safeData.length === 0 ? (
        <EmptyState />
      ) : (
        renderTable()
      )}

      {/* DELETE LOADING STATE */}
      {deleteEmployee.isPending && (
        <p className="text-sm text-gray-500 mt-2">Deleting employee...</p>
      )}
    </div>
  );
}
