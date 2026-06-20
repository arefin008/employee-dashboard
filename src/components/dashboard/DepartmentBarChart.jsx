import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DepartmentBarChart({ employees }) {
  const dataMap = {};

  employees.forEach((emp) => {
    dataMap[emp.department] = (dataMap[emp.department] || 0) + 1;
  });

  const data = Object.keys(dataMap).map((key) => ({
    department: key,
    count: dataMap[key],
  }));

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-4">Employees per Department</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
