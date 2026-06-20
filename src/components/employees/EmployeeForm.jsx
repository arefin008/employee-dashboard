import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeSchema } from "../../validations/employeeSchema";

export default function EmployeeForm({ defaultValues, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      {/* NAME */}
      <div>
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full border p-2 rounded"
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      {/* EMAIL */}
      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* DEPARTMENT */}
      <div>
        <input
          {...register("department")}
          placeholder="Department"
          className="w-full border p-2 rounded"
        />
        <p className="text-red-500 text-sm">{errors.department?.message}</p>
      </div>

      {/* SALARY */}
      <div>
        <input
          type="number"
          {...register("salary", { valueAsNumber: true })}
          placeholder="Salary"
          className="w-full border p-2 rounded"
        />
        <p className="text-red-500 text-sm">{errors.salary?.message}</p>
      </div>

      {/* STATUS */}
      <div>
        <select {...register("status")} className="w-full border p-2 rounded">
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <p className="text-red-500 text-sm">{errors.status?.message}</p>
      </div>

      {/* SUBMIT */}
      <button
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Saving..." : "Save Employee"}
      </button>
    </form>
  );
}
