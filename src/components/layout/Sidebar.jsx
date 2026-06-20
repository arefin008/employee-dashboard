import { NavLink } from "react-router-dom";
import { FaUsers, FaChartPie } from "react-icons/fa";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 p-3 rounded ${
      isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h1 className="text-xl font-bold mb-6">Employee MS</h1>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={linkClass}>
          <FaChartPie /> Dashboard
        </NavLink>

        <NavLink to="/employees" className={linkClass}>
          <FaUsers /> Employees
        </NavLink>
      </nav>
    </div>
  );
}
