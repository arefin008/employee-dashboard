import { useState, useMemo } from "react";
import { useEmployees } from "../hooks/useEmployees";
import EmployeeTable from "../components/employees/EmployeeTable";

export default function Employees() {
  const { data: employees = [], isLoading, isError } = useEmployees();

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = 5;

  const filteredData = useMemo(() => {
    let data = [...employees];

    // SEARCH
    if (search) {
      data = data.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // FILTER
    if (department) {
      data = data.filter((e) => e.department === department);
    }

    // SORT
    if (sortKey === "name") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortKey === "salary") {
      data.sort((a, b) => b.salary - a.salary);
    }

    return data;
  }, [employees, search, department, sortKey]);

  // PAGINATION
  const totalPages = Math.ceil(filteredData.length / pageSize);

  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  if (isLoading) return <p>Loading employees...</p>;
  if (isError) return <p className="text-red-500">Error loading data</p>;

  return (
    <div>
      <EmployeeTable
        data={paginatedData}
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        sortKey={sortKey}
        setSortKey={setSortKey}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
}
