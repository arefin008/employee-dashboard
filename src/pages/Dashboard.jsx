import { useEmployees } from "../hooks/useEmployees";
import StatCard from "../components/dashboard/StatCard";
import DepartmentBarChart from "../components/dashboard/DepartmentBarChart";
import StatusPieChart from "../components/dashboard/StatusPieChart";

export default function Dashboard() {
  const { data: employees = [], isLoading, isError } = useEmployees();
  console.log("employees:", employees);

  if (isLoading)
    return <div className="text-center mt-10">Loading dashboard...</div>;

  if (isError)
    return <div className="text-red-500">Failed to load dashboard</div>;

  // 📊 Derived Stats
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (emp) => emp.status === "Active",
  ).length;

  const departments = new Set(employees.map((e) => e.department)).size;

  const avgSalary =
    employees.reduce((acc, emp) => acc + Number(emp.salary), 0) /
    (employees.length || 1);

  return (
    <div className="space-y-6">
      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Employees" value={totalEmployees} />
        <StatCard title="Active Employees" value={activeEmployees} />
        <StatCard title="Departments" value={departments} />
        <StatCard title="Avg Salary" value={`$${avgSalary.toFixed(0)}`} />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DepartmentBarChart employees={employees} />
        <StatusPieChart employees={employees} />
      </div>
    </div>
  );
}
