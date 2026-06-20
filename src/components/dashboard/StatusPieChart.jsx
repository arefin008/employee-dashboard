import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function StatusPieChart({ employees }) {
  const active = employees.filter((e) => e.status === "Active").length;
  const inactive = employees.length - active;

  const data = [
    { name: "Active", value: active },
    { name: "Inactive", value: inactive },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-4">Employee Status</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" label outerRadius={100}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
