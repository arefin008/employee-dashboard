export default function EmployeeFilters({
  search,
  setSearch,
  department,
  setDepartment,
  sortKey,
  setSortKey,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-4">
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full"
      />

      {/* FILTER */}
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>

      {/* SORT */}
      <select
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="salary">Salary</option>
      </select>
    </div>
  );
}
