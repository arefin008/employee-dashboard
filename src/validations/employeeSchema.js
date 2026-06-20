import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  department: z.string().min(1, "Department is required"),
  salary: z
    .number({ invalid_type_error: "Salary must be a number" })
    .min(1, "Salary must be greater than 0"),
  status: z.enum(["Active", "Inactive"]),
});
